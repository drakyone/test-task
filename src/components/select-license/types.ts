import {License} from "../../interfaces";

export interface SelectLicenseProps {
  licenses: License[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
