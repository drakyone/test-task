import React, { FC } from 'react';
import {ReposListProps} from './types';
import "./style.scss";
import {Preloader} from "./preloader";

export const ReposList: FC<ReposListProps> = ({ repos, isLoading }) => (
    <div className="repos-list">
        <Preloader isLoading={isLoading} />
        <ul className="list-group mb-3">
            {repos.map(repo => <li className="list-group-item" key={repo.git_url}>{repo.name}</li>)}
        </ul>
    </div>
);
