import React, { FC } from 'react';
import { PaginationButtonProps } from './types';
import './style.scss';
import {PaginationType} from "../../../enums";
import "./style.scss";

export const PaginationButton: FC<PaginationButtonProps> = ({ onClick, name, children, pagination, totalRepos = 0, pageStep }) => (
    <li className={`page-item pagination-button ${ (name === PaginationType.Increase ? (pagination.end * pageStep) >= totalRepos : (pagination.start === 1)) ? "disabled" : "" }`}>
      <button
          className="page-link"
          onClick={onClick}
          name={name}
      >
        {children}
      </button>
    </li>
);
