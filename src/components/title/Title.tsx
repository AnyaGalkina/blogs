import React from 'react';
import {Divider} from '@mui/material';

export const Title = ({title}: {title: string}) => {
    return (
        <div>
            <h2>{title}</h2>
            <Divider />
        </div>
    );
};
