import React, { FC } from 'react';
import {ProjectInputProps} from "./types";

export const Input: FC<ProjectInputProps> = ({ value, onChange, name }) => (
    <div className="input-group mb-3 mt-3">
        <div className="input-group-prepend">
            <span className="input-group-text">{name}</span>
        </div>
        <input name="projectName" value={value} onChange={onChange} type="text" className="form-control app__input" />
    </div>
);
