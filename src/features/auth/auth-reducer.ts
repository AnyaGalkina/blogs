import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {authAPI, LoginReqType, SetNewPasswordReqType} from './auth-api';
import {setAppStatus} from '../../app/app-reducer';
import {CreateUserPeqType} from '../admin/admin-api';
import {RecoveryPasswordValuesType} from './passwordRecovery/recoveryPasswordForm/RecoveryPasswordForm';

const initialState = {
    email: '',
    userId: '',
    userName: '',
    isLoggedIn: false,
    accessToken: '',
}

const slice = createSlice({
        name: 'auth',
        initialState,
        reducers: {
            setEmail(state, action: PayloadAction<{ email: string }>) {
                state.email = action.payload.email;
            },
            setPassword() {

            },
            setUserId(state, action: PayloadAction<{ userId: string }>) {
                state.userId = action.payload.userId;
            },
            setLoggedIn(state, action: PayloadAction<{ isLoggedIn: boolean }>) {
                state.isLoggedIn = action.payload.isLoggedIn;
            },
            setAccessToken(state, action: PayloadAction<{ accessToken: string }>) {
                state.accessToken = action.payload.accessToken;
            },
            setUserName(state, action: PayloadAction<{ userName: string }>) {
                debugger
                state.userName = action.payload.userName;
            },
        }
    }
);


export const authReducer = slice.reducer;
export const {setEmail, setAccessToken, setUserId, setLoggedIn, setUserName} = slice.actions;

export const login = createAsyncThunk('auth/login', async (params: LoginReqType, thunkAPI) => {
    const {dispatch} = thunkAPI;
    dispatch(setAppStatus({appStatus: 'loading'}));
    try {
        const response = await authAPI.login(params);
        dispatch(setAccessToken({accessToken: response.data.accessToken,}));
        // debugger
        dispatch(setLoggedIn({isLoggedIn: true}));
    } catch (error: any) {
        //The password or the email or
        // Username are incorrect. Try again,
        // please
    } finally {
        dispatch(setAppStatus({appStatus: 'idle'}));
    }
});

export const signUp = createAsyncThunk('auth/signUp', async (params: CreateUserPeqType, thunkAPI) => {
    const {dispatch} = thunkAPI;
    dispatch(setAppStatus({appStatus: 'loading'}));
    try {
        const response = await authAPI.registration(params);
        dispatch(setEmail({email: params.email}));
    } catch (error: any) {

    } finally {
        dispatch(setAppStatus({appStatus: 'idle'}));
    }
});


export const sendConfirmationCode = createAsyncThunk('auth/sendConfirmationCode', async (params: { code: string }, thunkAPI) => {
    const {dispatch} = thunkAPI;
    dispatch(setAppStatus({appStatus: 'loading'}));
    try {
        const response = await authAPI.confirmEmail(params);
        // dispatch(setEmail({email: params.email}));
    } catch (error: any) {

    } finally {
        dispatch(setAppStatus({appStatus: 'idle'}));
    }
});


export const refreshToken = createAsyncThunk('auth/refreshToken', async (_, thunkAPI) => {
    const {dispatch} = thunkAPI;
    dispatch(setAppStatus({appStatus: 'loading'}));
    try {
        const response = await authAPI.refreshToken();
        const accessToken = response.data.accessToken;
        localStorage.setItem('accessToken', JSON.stringify(accessToken));
        dispatch(setAccessToken({accessToken}));
    } catch (error: any) {

    } finally {
        dispatch(setAppStatus({appStatus: 'idle'}));
    }
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
        debugger
        const {dispatch} = thunkAPI;
        dispatch(setAppStatus({appStatus: 'loading'}));
        try {
            const response = await authAPI.logout();
            // const accessToken = response.data.accessToken;
            // localStorage.setItem('accessToken', JSON.stringify(accessToken));
            // dispatch(setAccessToken({accessToken}));
        } catch (error: any) {

        } finally {
            dispatch(setAppStatus({appStatus: 'idle'}));
        }

    }
)

export const passwordRecovery = createAsyncThunk('auth/passwordRecovery', async (params: RecoveryPasswordValuesType, thunkAPI) => {
        const {dispatch} = thunkAPI;
        dispatch(setAppStatus({appStatus: 'loading'}));
        try {
            dispatch(setEmail({email: params.email}));
            const response = await authAPI.passwordRecovery(params);
        } catch (error: any) {

        } finally {
            dispatch(setAppStatus({appStatus: 'idle'}));
        }

    }
)
export const setNewPassword = createAsyncThunk('auth/setNewPassword', async (params: SetNewPasswordReqType, thunkAPI) => {
        const {dispatch} = thunkAPI;
        dispatch(setAppStatus({appStatus: 'loading'}));
        try {
            const response = await authAPI.setNewPassword(params);
            // dispatch(setEmail({password: params.newPassword}));
        } catch (error: any) {

        } finally {
            dispatch(setAppStatus({appStatus: 'idle'}));
        }

    }
)

