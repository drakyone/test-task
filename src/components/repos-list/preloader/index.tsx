import React, { FC } from 'react';
import {PreloaderProps} from './types';
import "./style.scss";

export const Preloader: FC<PreloaderProps> = ({ isLoading }) => (
    <>{isLoading ? <div className="spinner-border text-primary preloader" role="status">
            <span className="sr-only">Loading...</span>
        </div> : null}</>
);

