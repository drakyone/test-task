export interface Repos {
    items: any[],
    total_count: number,
}

export interface PaginationInterface {
    start: number;
    end: number;
}

export interface InputValue {
    projectName: string
}

export interface License {
    key: string;
    name: string;
    spdx_id: string;
    url: string;
    node_id: string;
}
