import styled from 'styled-components';
import {ReactElement} from 'react';


const StyledWithMargin = styled.div`
  margin: ${
          // @ts-ignore
          ({margin}) => margin || "0px"};
  margin-right: ${
          // @ts-ignore
          ({marginRight}) => marginRight ||  "0px"};
  margin-left: ${
          // @ts-ignore
          ({marginLeft}) => marginLeft ||  "0px"};
  margin-bottom: ${
          // @ts-ignore
          ({marginBottom}) => marginBottom ||   "0px"};
  margin-top: ${
          // @ts-ignore
          ({marginTop}) => marginTop ||  "0px"};
`

type PropsType = {
    margin?: string;
    marginRigth?: string;
    marginBottom?: string;
    marginLeft?: string;
    marginTop?: string;
    children?: ReactElement[] | ReactElement;
}

export const DivWithMargin = (props: PropsType) => {
    return <StyledWithMargin {...props}/>
}
