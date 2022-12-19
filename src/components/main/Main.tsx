import React from 'react';
import {Layout} from 'antd';
import {LinearProgress} from '@mui/material';
import {useSelector} from 'react-redux';
import {getAppStateSelector} from '../../common/selectors/selectors';
import {StyledRoutes} from './routes/Routes';
import {StyledLayout} from '../styled/StyledLayout';
import {MainHeader} from '../styled/StyledHeader';
import {MainSider} from './sider/MainSider';

export const Main = () => {

    const appStatus = useSelector(getAppStateSelector);

    return (
        <StyledLayout>
            <MainHeader/>
            <Layout>
                <MainSider/>
                {appStatus === 'loading' && <LinearProgress/>}
                {/*<ErrorSnackbars />*/}
                <StyledRoutes/>
            </Layout>
        </StyledLayout>
    );
};
