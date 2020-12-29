import {PaginationInterface} from "../../../interfaces";

export interface PaginationButtonProps {
  name: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  pagination: PaginationInterface;
  total?: number;
  pageStep: number;
}
