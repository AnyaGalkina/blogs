import React from 'react';
import styled from 'styled-components';

export const StyledHeader = styled.div`
  background-color: #FCFBFB;
  padding: 1% 4%;
  box-shadow: 0 5px 20px rgba(29, 33, 38, 0.03), 0 1px 2px rgba(29, 33, 38, 0.1);
  border-color: rgba(0, 0, 0, 0.12);
`

export const MainHeader = () => {
    return (
        <StyledHeader  theme={'light'}>
            <header>
                <h1>Blogger Platform</h1>
            </header>
        </StyledHeader>
    );
};
