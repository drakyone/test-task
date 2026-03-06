import React, { FC } from 'react';
import {PaginationProps} from './types';
import {PaginationButton} from "./pagination-button";
import {PaginationType} from "../../enums";
import {PAGE_STEP} from "../../constants";
import {PaginationItem} from "./pagination-item";

export const Pagination: FC<PaginationProps> = ({ onPaginationClick, onPageClick, paginationRange, pagination, total = 0, page }) => (
    <nav className="app__pagination">
        <ul className="pagination justify-content-end">

            <PaginationButton
                name={PaginationType.Decrease}
                onClick={onPaginationClick}
                pagination={pagination}
                pageStep={PAGE_STEP}
            >
                Previous
            </PaginationButton>

            {paginationRange.map(p => (<PaginationItem item={p} page={page} onClick={onPageClick} />))}

            <PaginationButton
                name={PaginationType.Increase}
                onClick={onPaginationClick}
                pagination={pagination}
                total={total}
                pageStep={PAGE_STEP}
            >
                Next
            </PaginationButton>

        </ul>
    </nav>
);
