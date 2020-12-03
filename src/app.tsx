import React, { FC, useEffect, useState, useMemo } from 'react';
import {getLicenses, getTopJsRepos} from './axios';
import {
    INITIAL_INPUT_VALUE,
    INITIAL_LICENSE,
    INITIAL_LICENSES,
    INITIAL_PAGINATION,
    INITIAL_REPOS,
    STEP
} from "./constants";
import {rangeCreator} from "./helpers";
import "./app.scss";
import {PaginationType} from "./enums";
import {Alert} from "./components/alert";
import {Pagination} from "./components/pagination";
import {ReposList} from "./components/repos-list";
import {Error} from "./components/error";
import {SelectLicense} from "./components/select-license";
import {ProjectInput} from "./components/project-input";

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

    const onPaginationClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const target = event.target as any;
        const { name } = target;
        const isDecrease: Boolean = PaginationType.Decrease === name
        setPagination(p => ({
            start: isDecrease ? p.start - STEP : p.start + STEP,
            end: isDecrease ? p.end - STEP : p.end + STEP
        }))
        setPage(isDecrease ? pagination.end - STEP : pagination.start + STEP) ;
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
            <ProjectInput value={inputValue.projectName} onChange={onInputChange} />
            <SelectLicense licenses={licenses} value={license} onChange={onSelect} />
            <Error error={error} />
            <ReposList repos={repos.items} isLoading={isLoading} />
            <Alert isReposExist={Boolean(repos.items.length)} isErrorExist={Boolean(error)}> Everything is ok! We just dont have any data to show! </Alert>
            <Pagination
                onPaginationClick={onPaginationClick}
                onPageClick={setPage}
                pagination={pagination}
                totalRepos={repos.total_count}
                paginationRange={paginationRange}
                page={page}
            />
        </div>
    </main>
  );
}

export default App;
