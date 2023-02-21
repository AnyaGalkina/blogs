import React, {useEffect} from 'react';
import {Layout} from 'antd';
import {LinearProgress} from '@mui/material';
import {useSelector} from 'react-redux';
import {
    getAccessTokenSelector,
    getAppStateSelector,
    getIsInitializedSelector,
    getIsLoggedInSelector
} from '../../common/selectors/selectors';
import {StyledRoutes} from './routes/Routes';
import {StyledLayout} from '../styled/StyledLayout';
import {MainHeader} from '../styled/StyledHeader';
import {MainSider} from './sider/MainSider';
import {useAppDispatch} from '../../common/hooks';
import {initializeApp} from '../../app/app-reducer';

export const Main = () => {
    const dispatch = useAppDispatch();

    const appStatus = useSelector(getAppStateSelector);
    const isInitialized = useSelector(getIsInitializedSelector);
    const accessToken = useSelector(getAccessTokenSelector);


    const isLoading = appStatus === 'loading';

    // if (!isInitialized) {
    //     return (
    //         <div style={{position: "fixed", top: "30%", textAlign: "center", width: "100%"}}>
    //             {/*<CircularProgress color="primary"/>*/}
    //             <div>LOADING...</div>
    //         </div>
    //     )
    // }

    useEffect(() => {
        dispatch(initializeApp())
    }, [accessToken]);

    if (!isInitialized) {
        return (
            <div style={{position: "fixed", top: "30%", textAlign: "center", width: "100%"}}>
                {/*<CircularProgress color="primary"/>*/}
                <div>LOADING...</div>
            </div>
        )
    }

    return (
        <>
            <MainHeader/>
            {isLoading && <LinearProgress/>}
            {/*<ErrorSnackbars />*/}
            <StyledRoutes/>
        </>
    );
};
