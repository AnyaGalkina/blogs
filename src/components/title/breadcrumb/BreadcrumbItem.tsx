import React from 'react';
import {CaretRightOutlined} from '@ant-design/icons';
import {Breadcrumb} from 'antd';
import {BreadcrumbsType} from '../Title';

export const BreadcrumbItem = ({breadcrumb}: { breadcrumb: BreadcrumbsType }) => {
    return (
        <>
            <div style={{width: '14px', height: '14px', marginLeft: '10px', marginRight: '10px'}}>
                <CaretRightOutlined/>
            </div>
            <Breadcrumb.Item>
                {breadcrumb.breadcrumbLink
                    ? <a href={breadcrumb.breadcrumbLink}>{breadcrumb.breadcrumbItem}</a>
                    : <span>{breadcrumb.breadcrumbItem}</span>
                }
            </Breadcrumb.Item>
        </>
    );
};
