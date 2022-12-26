import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {authAPI, LoginReqType} from './auth-api';
import {setAppStatus} from '../../app/app-reducer';
import {CreateUserPeqType} from '../admin/admin-api';

const initialState = {
    email: ''
}

const slice = createSlice({
        name: 'auth',
        initialState,
        reducers: {
            setEmail(state, action: PayloadAction<{ email: string }>) {
                state.email = action.payload.email;
            },
        }
    }
);


export const authReducer = slice.reducer;
export const {setEmail} = slice.actions;

export const login = createAsyncThunk('auth/login', async (params: LoginReqType, thunkAPI) => {
    const {dispatch} = thunkAPI;
    dispatch(setAppStatus({appStatus: 'loading'}));
    try {
        const response = await authAPI.login(params);
        // dispatch(setPosts({posts: response.data.items}));
    } catch (error: any) {

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


export const sendConfirmationCode = createAsyncThunk('auth/sendConfirmationCode', async (params:{code: string}, thunkAPI) => {
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