import React, { FC } from 'react';
import {ErrorProps} from './types';

export const Error: FC<ErrorProps> = ({ error }) => (
    <div className="alert alert-danger" role="alert">
        {error}
    </div>
);

