import React, { FC } from 'react';
import {ListProps} from "./types";
import "./style.scss";

export const List: FC<ListProps> = ({ list, isLoading }) => (
    <div className="list">
        {isLoading ? <div className="spinner-border text-primary preloader" role="status">
            <span className="sr-only">Loading...</span>
        </div> : null}
        <ul className="list-group mb-3">
            {list.map(item => <li className="list-group-item" key={item.git_url}>{item.name}</li>)}
        </ul>
    </div>
);
