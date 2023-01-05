import React, {useEffect} from 'react';
import {Layout} from 'antd';
import {LinearProgress} from '@mui/material';
import {useSelector} from 'react-redux';
import {getAppStateSelector, getIsInitializedSelector, getIsLoggedInSelector} from '../../common/selectors/selectors';
import {StyledRoutes} from './routes/Routes';
import {StyledLayout} from '../styled/StyledLayout';
import {MainHeader} from '../styled/StyledHeader';
import {MainSider} from './sider/MainSider';
import {useAppDispatch} from '../../common/hooks';
import {initializeApp} from '../../app/app-reducer';

export const Main = () => {
    const dispatch = useAppDispatch();

    const appStatus = useSelector(getAppStateSelector);
    const isLoggedIn = useSelector(getIsLoggedInSelector);

    const isLoading = appStatus === 'loading';

    // useEffect(() => {
    //     dispatch(initializeApp())
    // }, []);
    //
    // if (!isInitialized) {
    //     return (
    //         <div style={{position: "fixed", top: "30%", textAlign: "center", width: "100%"}}>
    //             {/*<CircularProgress color="primary"/>*/}
    //             <div>LOADING...</div>
    //         </div>
    //     )
    // }

    return (
        <StyledLayout>
            <MainHeader/>
            <Layout>
                {isLoggedIn && <MainSider/>}
                {isLoading && <LinearProgress/>}
                {/*<ErrorSnackbars />*/}
                <StyledRoutes/>
            </Layout>
        </StyledLayout>
    );
};
