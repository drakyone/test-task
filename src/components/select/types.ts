import {License} from "../../interfaces";

export interface SelectProps {
  licenses: License[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
