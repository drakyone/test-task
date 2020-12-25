import {PaginationInterface} from "../../interfaces";

export interface PaginationProps {
  onPaginationClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onPageClick: (item: number) => void;
  pagination: PaginationInterface;
  total: number;
  paginationRange: number[];
  page: number;
}
