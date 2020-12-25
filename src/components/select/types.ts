import {License} from "../../interfaces";

export interface SelectProps {
  options: License[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
