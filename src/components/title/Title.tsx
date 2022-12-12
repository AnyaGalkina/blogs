import React from 'react';
import {Divider} from '@mui/material';
import {Breadcrumb} from 'antd';
import {CaretRightOutlined} from '@ant-design/icons';

type PropsType = {
    title: string;
    breadcrumbs?: BreadcrumbsType[]
}

type BreadcrumbsType = {
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
                            return (
                                <>
                                    <div style={{width:'14px', height: '14px', marginLeft:'10px',marginRight:'10px'}}>
                                        <CaretRightOutlined />
                                    </div>
                                    <Breadcrumb.Item key={index}>
                                        {breadcrumb.breadcrumbLink
                                            ? <a href={breadcrumb.breadcrumbLink}>{breadcrumb.breadcrumbItem}</a>
                                            : <span>{breadcrumb.breadcrumbItem}</span>
                                        }
                                    </Breadcrumb.Item>

                                </>
                            )
                        })
                        : ''
                    }
                </Breadcrumb>
            </div>

            <Divider/>
        </div>
    );
};
