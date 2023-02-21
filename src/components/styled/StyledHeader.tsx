import React from 'react';
import styled from 'styled-components';
import {Dropdown, MenuProps} from 'antd';
import {useSelector} from 'react-redux';
import {getUserNameSelector} from '../../common/selectors/selectors';
import {useAppDispatch} from '../../common/hooks';
import {logout} from '../../features/auth/auth-reducer';
import {LogoutOutlined, SettingOutlined} from '@ant-design/icons';
import {useNavigate} from 'react-router-dom';
import {PATH} from '../../common/enums/path';

export const StyledHeader = styled.div`
  background-color: #FCFBFB;
  padding: 1% 4%;
  box-shadow: 0 5px 20px rgba(29, 33, 38, 0.03), 0 1px 2px rgba(29, 33, 38, 0.1);
  border-color: rgba(0, 0, 0, 0.12);
  height: 80px;
`

export const MainHeader = () => {
    const userName = useSelector(getUserNameSelector);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const onSettingsClick = () => {
        navigate(PATH.PERSONAL_SETTINGS);
    }

    const onLogoutClick = () => {
        dispatch(logout());
    }

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <div onClick={onSettingsClick}>
                    <SettingOutlined/> Personal Settings
                </div>
            ),
        },
        {
            key: '2',
            label: (
                <span onClick={onLogoutClick}>
                    <LogoutOutlined/> Logout
                </span>
            ),
        },
    ];


    return (
        <StyledHeader theme={'light'}>
            <header>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <h1>Blogger Platform</h1>
                    {userName &&
                        <div style={{cursor: 'pointer'}}>
                            <Dropdown menu={{items}} placement="bottomRight">
                                <span>{userName}</span>
                            </Dropdown>
                        </div>
                    }
                </div>
            </header>
        </StyledHeader>
    );
};
