import React from 'react';
import styled from 'styled-components';
import {Button} from 'antd';
import {useSelector} from 'react-redux';
import {getIsLoggedInSelector} from '../../common/selectors/selectors';
import {useAppDispatch} from '../../common/hooks';
import {logout} from '../../features/auth/auth-reducer';

export const StyledHeader = styled.div`
  background-color: #FCFBFB;
  padding: 1% 4%;
  box-shadow: 0 5px 20px rgba(29, 33, 38, 0.03), 0 1px 2px rgba(29, 33, 38, 0.1);
  border-color: rgba(0, 0, 0, 0.12);
  height: 80px;
`

export const MainHeader = () => {
    const isLoggedIn = useSelector(getIsLoggedInSelector);
    const dispatch = useAppDispatch();

    const onLogoutClick  = () => {
         dispatch(logout());
    }


    return (
        <StyledHeader  theme={'light'}>
            <header>
                <div style={{display: 'flex', justifyContent: "space-between"}}>
                    <h1>Blogger Platform</h1>
                    {isLoggedIn &&
                        <Button onClick={onLogoutClick}>Logout</Button>
                    }
                </div>
            </header>
        </StyledHeader>
    );
};
