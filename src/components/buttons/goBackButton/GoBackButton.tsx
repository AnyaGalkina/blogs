import React from 'react';
import {ArrowLeftOutlined} from '@ant-design/icons';
import styled from 'styled-components';

type PropsType = {
    onBackToClick: () => void;
    buttonTitle: string;
}

const StyledGoBackButton = styled.div`
  margin: 10px 0 20px;
  cursor: default;
`;


export const GoBackButton = ({onBackToClick, buttonTitle}: PropsType) => {
    return (
        <StyledGoBackButton>
            <span onClick={onBackToClick}>
                <ArrowLeftOutlined/> Back to {buttonTitle}
            </span>
        </StyledGoBackButton>
    );
};
