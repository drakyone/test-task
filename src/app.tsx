import React, { FC, useEffect, useState, useMemo } from 'react';
import {getLicenses, getTopJsRepos} from './axios';
import {
    INITIAL_INPUT_VALUE,
    INITIAL_LICENSE,
    INITIAL_LICENSES,
    INITIAL_PAGINATION,
    INITIAL_REPOS, PAGE_STEP,
    STEP
} from "./constants";
import {rangeCreator} from "./helpers";
import "./app.scss";

const App: FC = () => {
    const [repos, setRepos] = useState(INITIAL_REPOS);
    const [licenses, setLicenses] = useState(INITIAL_LICENSES);
    const [license, setLicense] = useState(INITIAL_LICENSE);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [pagination, setPagination] = useState(INITIAL_PAGINATION);
    const [page, setPage] = useState(1);
    const [inputValue, setInputValue] = useState(INITIAL_INPUT_VALUE);

    const paginationRange = useMemo(() => rangeCreator(pagination.start, pagination.end, repos.total_count), [pagination, repos.total_count])

    const resetPage = () => {
        setPagination(INITIAL_PAGINATION);
        setPage(1);
    }

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(p => ({
            ...p,
            [event.target.name]: event.target.value
        }));
        resetPage();
    }

    const onSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setLicense(event.target.value)
        resetPage();
    }

    useEffect(() => {

        (async () => {
            const { message, data } = await getLicenses();
            if(data) {
                setLicenses(data)
                error && setError('');
            }
            else setError(message)
        })()

    }, []);

    useEffect(() => {

        const { projectName } = inputValue;

        (async () => {
            setLoading(true);
            const { message, data } = await getTopJsRepos(page, license, projectName);
            if(data) {
                setRepos(data)
                error && setError('');
            }
            else setError(message)
            setLoading(false);
        })()

    }, [page, license, inputValue]);

  return (
    <main className="app">
        <div className="container">

            <div className="input-group mb-3 mt-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">Project name</span>
                </div>
                <input name="projectName" value={inputValue.projectName} onChange={onInputChange} type="text" className="form-control app__input" />
            </div>

            <select value={license} onChange={onSelect} className="custom-select app__select mb-3">
                {licenses.map(({ name, key, node_id }) => <option key={node_id} value={key}>{name}</option>)}
            </select>

            {error ? <div className="alert alert-danger" role="alert">
                {error}
            </div> : null}

            <div className="app__list">
                {isLoading ? <div className="spinner-border text-primary app__preloader" role="status">
                    <span className="sr-only">Loading...</span>
                </div> : null}

                <ul className="list-group mb-3 app__items">
                    {repos.items.map(repo => <li className="list-group-item" key={repo.git_url}>{repo.name}</li>)}
                </ul>

                {!repos.items.length && !error ? (
                    <div className="alert alert-secondary" role="alert">
                        Everything is ok! We just dont have any data to show!
                    </div>
                ) : null}
            </div>

            <nav className="app__pagination">
                <ul className="pagination justify-content-end">

                    <li className={`page-item ${ pagination.start === 1 ? "disabled" : "" }`}>
                        <button
                            className="page-link"
                            onClick={() => {
                                setPagination(p => ({ start: p.start - STEP, end: p.end - STEP }))
                                setPage(pagination.end - STEP);
                            }}
                        >
                            Previous
                        </button>
                    </li>

                    {paginationRange.map(p =>
                        <li
                            key={p}
                            className={`page-item pagination__item ${ p === page ? "active" : "" } `}
                            onClick={() => setPage(p)}
                        >
                            <p className="page-link">{p}</p>
                        </li>)}

                    <li className={`page-item pagination__item ${ (pagination.end * PAGE_STEP) >= repos.total_count ? "disabled" : "" }`}>
                        <button
                            className="page-link"
                            onClick={() => {
                                setPagination(p => ({ start: p.start + STEP, end: p.end + STEP }))
                                setPage(pagination.start + STEP);
                            }}
                        >
                            Next
                        </button>
                    </li>

                </ul>
            </nav>

        </div>
    </main>
  );
}

export default App;
