import {InputValue, License, Pagination, Repos} from "./interfaces";
import moment from "moment";

export const INITIAL_REPOS: Repos = {
    items: [],
    total_count: 0,
}

export const INITIAL_LICENSES: License[] = [];

export const INITIAL_LICENSE: string = 'mit';

export const INITIAL_PAGINATION: Pagination = {
    start: 1,
    end: 3,
};

export const INITIAL_INPUT_VALUE: InputValue = {
    projectName: ''
};

export const MONTH_AGO_DATE: string = moment().subtract(1, 'months').format("YYYY-MM-DD");

export const STEP = 3;
export const PAGE_STEP = 5;
