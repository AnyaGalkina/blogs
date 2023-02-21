import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
// @ts-ignore
import {Nullable} from '../common/types/types';
import {authAPI} from '../features/auth/auth-api';
import {setLoggedIn, setUserId, setUserName} from '../features/auth/auth-reducer';

export type AppStatusType = 'idle' | 'loading';

export const initialState = {
    appStatus: 'idle' as AppStatusType,
    appError: null as Nullable<string>,
    isInitialized: false,
};

const slice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setAppStatus(state, action: PayloadAction<{ appStatus: AppStatusType }>) {
            state.appStatus = action.payload.appStatus;
        },
        setAppError(state, action: PayloadAction<{ appError: Nullable<string> }>) {
            state.appError = action.payload.appError;
        },
        setInitialized(state, action: PayloadAction<{ isInitialized: boolean }>) {
            state.isInitialized = action.payload.isInitialized;
        }
    }
});

export const appReducer = slice.reducer;
export const {setAppError, setAppStatus, setInitialized} = slice.actions;


export const initializeApp = createAsyncThunk('/auth/me', async (_, thunkAPI) => {
    const {dispatch} = thunkAPI;
    dispatch(setAppStatus({appStatus: 'loading'}));
    try {
        const response = await authAPI.getMe();
        dispatch(setLoggedIn({isLoggedIn: true}));
        dispatch(setUserId({userId: response.data.userId}));
        dispatch(setUserName({userName: response.data.login}));

    } catch (error: any) {

    } finally {
        dispatch(setInitialized({isInitialized: true}));
        dispatch(setAppStatus({appStatus: 'idle'}));
    }

})
