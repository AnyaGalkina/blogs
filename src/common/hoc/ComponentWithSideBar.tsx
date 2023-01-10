import React from 'react';
import {MainSider} from '../../components/main/sider/MainSider';
import {Flex} from '../../components/styled/Flex';
import styled from 'styled-components';


const StyledContent = styled.div`
  padding: 0 5% 0 2%;
  //width: ;
`

export const ComponentWithSideBar = (component: JSX.Element) => {
    return (
        <Flex justify={'start'} align={'start'}>
            <MainSider/>
            <StyledContent>
                {component}
            </StyledContent>
        </Flex>
    );
};
