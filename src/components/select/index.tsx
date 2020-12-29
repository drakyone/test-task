import React, { FC } from 'react';
import {SelectProps} from "./types";

export const Select: FC<SelectProps> = ({ options, value, onChange }) => (
    <select value={value} onChange={onChange} className="custom-select app__select mb-3">
        {options.map(({ name, key, node_id }) => <option key={node_id} value={key}>{name}</option>)}
    </select>
);
