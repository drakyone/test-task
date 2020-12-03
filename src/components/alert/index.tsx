import React, { FC } from 'react';
import {AlertProps} from "./types";

export const Alert: FC<AlertProps> = ({ children, isErrorExist, isReposExist }) => (
    <>{!isReposExist && !isErrorExist ? (
        <div className="alert alert-secondary" role="alert">
            {children}
        </div>
    ) : null}</>
);
