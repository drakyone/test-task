import {Pagination} from "../../interfaces";

export interface PaginationProps {
  onPaginationClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onPageClick: (item: number) => void;
  pagination: Pagination;
  totalRepos: number;
  paginationRange: number[];
  page: number;
}
