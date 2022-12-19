import React from 'react';
import {CaretRightOutlined} from '@ant-design/icons';
import {Breadcrumb} from 'antd';
import {BreadcrumbsType} from '../Title';
import {StyledBreadcrumbArrow} from '../../styled/StyledBreadcrumbArrow';

export const BreadcrumbItem = ({breadcrumb}: { breadcrumb: BreadcrumbsType }) => {
    return (
        <>
            <StyledBreadcrumbArrow>
                <CaretRightOutlined/>
            </StyledBreadcrumbArrow>
                <Breadcrumb.Item>
                    {breadcrumb.breadcrumbLink
                        ? <a href={breadcrumb.breadcrumbLink}>{breadcrumb.breadcrumbItem}</a>
                        : <span>{breadcrumb.breadcrumbItem}</span>
                    }
                </Breadcrumb.Item>
        </>
    );
};
