import {Pagination} from "../../../interfaces";

export interface PaginationButtonProps {
  name: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  pagination: Pagination;
  totalRepos?: number;
  pageStep: number;
}
