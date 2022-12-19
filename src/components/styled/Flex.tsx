import styled from 'styled-components';
import React, {ReactElement} from 'react';

const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${({
                       // @ts-ignore
                       direction}) => direction || 'row'};
  justify-content: ${({
                        // @ts-ignore
                        justify}) => justify || 'center'};
  align-items: ${({
                    // @ts-ignore
                    align}) => align || 'center'};
  flex-wrap: ${({
                  // @ts-ignore
                  wrap}) => wrap || 'no-wrap'};
  margin: ${({
               // @ts-ignore
               margin}) => margin || '0px'};
`;

type PropsType = {
    children?: ReactElement[] | ReactElement;
    direction?: string;
    justify?: string
    align?: string;
    wrap?: string;
    margin?: string;
}

export const Flex = (props: PropsType) => {
    return <StyledFlex {...props}/>
};