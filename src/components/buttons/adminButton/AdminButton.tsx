import React, {memo} from 'react';
import {Button} from 'antd';
import styled from 'styled-components';

const StyledAdminButton = styled(Button)`
  background-color: #f9346b;
  color: white;
`;


type PropsType = {
    title: string;
    onClickHandler: () => void;
}

export const AdminButton = memo(({title, onClickHandler}: PropsType) => {
    return (
        <StyledAdminButton onClick={onClickHandler}>
            {title}
        </StyledAdminButton>
    );
});
