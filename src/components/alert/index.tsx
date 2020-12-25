import React, { FC } from 'react';

export const Alert: FC = ({ children }) => (
        <div className="alert alert-secondary" role="alert">
            {children}
        </div>
);
