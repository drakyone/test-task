import React, { FC } from 'react';
import {PaginationItemProps} from './types';
import "./style.scss";

export const PaginationItem: FC<PaginationItemProps> = ({ item, page, onClick }) => (
    <li
        key={item}
        className={`page-item pagination-item ${ item === page ? "active" : "" } `}
        onClick={() => onClick(item)}
    >
        <p className="page-link">{item}</p>
    </li>
);
