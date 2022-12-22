import styled from 'styled-components';
import React, {ReactElement} from 'react';

const StyledAdminButton = styled.button`
  background-color: #f9346b;
  color: white;
  border: 0;
  padding: 5px 10px;
  border-radius: 5px;
`;

type  PropsType = {
    children: ReactElement | string;
}
export const FormButton = (props: PropsType) => {
    return (
        <StyledAdminButton {...props} type={'submit'}/>
    );
};
