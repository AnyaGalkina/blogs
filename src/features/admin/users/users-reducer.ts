import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {adminAPI, CreateUserPeqType, GetUserResType} from '../admin-api';
import {setAppStatus} from '../../../app/app-reducer';

const initialState = {
    users: [] as GetUserResType []
}

const slice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers(state, action: PayloadAction<{ users: GetUserResType [] }>) {
            state.users = action.payload.users
        }
    }
});

export const {setUsers} = slice.actions;
export const usersReducer = slice.reducer;

export const getUsers = createAsyncThunk('users/getusers', async (_: void, thunkAPI) => {
    const {dispatch} = thunkAPI;

    dispatch(setAppStatus({appStatus: 'loading'}));

    try {
        // const response = await .getUsers(params);
        const response = await adminAPI.getUsers();
        dispatch(setUsers({users: response.data.items}));

    } catch (error: any) {

    } finally {
        dispatch(setAppStatus({appStatus: 'idle'}));
    }
});

export const deleteUser = createAsyncThunk('users/deleteUser', async (id: string, thunkAPI) => {
    const {dispatch} = thunkAPI;

    dispatch(setAppStatus({appStatus: 'loading'}));

    try {
        const response = await adminAPI.deleteUser(id);
        dispatch(getUsers());
    } catch (error: any) {

    } finally {
        dispatch(setAppStatus({appStatus: 'idle'}));
    }
});

export const createUser = createAsyncThunk('users/deleteUser', async (params: CreateUserPeqType, thunkAPI) => {
    const {dispatch} = thunkAPI;

    dispatch(setAppStatus({appStatus: 'loading'}));

    try {
        const response = await adminAPI.createUser(params);
        dispatch(getUsers());
    } catch (error: any) {

    } finally {
        dispatch(setAppStatus({appStatus: 'idle'}));
    }
});




