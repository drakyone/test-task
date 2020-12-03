import React, { FC } from 'react';
import {SelectLicenseProps} from "./types";

export const SelectLicense: FC<SelectLicenseProps> = ({ licenses, value, onChange }) => (
    <select value={value} onChange={onChange} className="custom-select app__select mb-3">
        {licenses.map(({ name, key, node_id }) => <option key={node_id} value={key}>{name}</option>)}
    </select>
);
