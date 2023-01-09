import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {authAPI, LoginReqType} from './auth-api';
import {setAppStatus} from '../../app/app-reducer';
import {CreateUserPeqType} from '../admin/admin-api';

const initialState = {
    email: '',
    userId: '',
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
            setUserId(state, action: PayloadAction<{ userId: string }>) {
                state.userId = action.payload.userId;
            },
            setLoggedIn(state, action: PayloadAction<{ isLoggedIn: boolean }>) {
                state.isLoggedIn = action.payload.isLoggedIn;
            },
            setAccessToken(state, action: PayloadAction<{ accessToken: string }>) {
                state.accessToken = action.payload.accessToken;
            },
        }
    }
);


export const authReducer = slice.reducer;
export const {setEmail, setAccessToken, setUserId, setLoggedIn} = slice.actions;

export const login = createAsyncThunk('auth/login', async (params: LoginReqType, thunkAPI) => {
    const {dispatch} = thunkAPI;
    dispatch(setAppStatus({appStatus: 'loading'}));
    try {
        const response = await authAPI.login(params);
        dispatch(setAccessToken({accessToken: response.data.accessToken,}));
        dispatch(setLoggedIn({isLoggedIn: true}));
        // debugger
        // const refreshToken = response.cookies.refreshToken
        // console.log()
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