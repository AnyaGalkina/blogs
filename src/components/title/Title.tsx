import React, {memo} from 'react';
import {Divider} from '@mui/material';
import {Breadcrumb} from 'antd';
import {BreadcrumbItem} from './breadcrumb/BreadcrumbItem';
import styled from 'styled-components';
import {Flex} from '../styled/Flex';

type PropsType = {
    title: string;
    breadcrumbs?: BreadcrumbsType[]
}

export type BreadcrumbsType = {
    breadcrumbLink?: string;
    breadcrumbItem: string;
}


const StyledTitleBlock = styled.div`
  margin-bottom: 15px;
`;

export const Title = memo(({title, breadcrumbs}: PropsType) => {
    return (
        <StyledTitleBlock>
            <Flex justify={'start'}>
                <h2>{title}</h2>

                <Breadcrumb style={{display: 'flex', justifyContent: 'start', alignItems: 'end'}}>
                    {breadcrumbs
                        ? breadcrumbs.map((breadcrumb, index) => {
                            return <BreadcrumbItem key={index} breadcrumb={breadcrumb}/>
                        })
                        : ''
                    }
                </Breadcrumb>
            </Flex>

            <Divider/>

        </StyledTitleBlock>
    );
});
