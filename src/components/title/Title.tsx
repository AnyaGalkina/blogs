import React from 'react';
import {Divider} from '@mui/material';
import {Breadcrumb} from 'antd';
import {BreadcrumbItem} from './breadcrumb/BreadcrumbItem';

type PropsType = {
    title: string;
    breadcrumbs?: BreadcrumbsType[]
}

export type BreadcrumbsType = {
    breadcrumbLink?: string;
    breadcrumbItem: string;
}

export const Title = ({title, breadcrumbs}: PropsType) => {
    return (
        <div style={{marginBottom: '15px'}}>
            <div style={{display: 'flex', justifyContent: 'start'}}>
                <h2>{title}</h2>

                <Breadcrumb style={{display: 'flex', justifyContent: 'start', alignItems: 'center'}}>
                    {breadcrumbs ? breadcrumbs.map((breadcrumb, index) => {
                            return <BreadcrumbItem key={index} breadcrumb={breadcrumb}/>
                        })
                        : ''
                    }
                </Breadcrumb>
            </div>

            <Divider/>
        </div>
    );
};
