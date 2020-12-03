import React, { FC } from 'react';
import {ErrorProps} from './types';

export const Error: FC<ErrorProps> = ({ error }) => (
    <>{error ? <div className="alert alert-danger" role="alert">
        {error}
    </div> : null}</>
);

