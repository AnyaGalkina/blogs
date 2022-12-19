import {createAsyncThunk, createSlice, PayloadAction, PayloadActionCreator} from '@reduxjs/toolkit';
import {adminAPI, GetUserResType} from '../admin-api';
import {setAppStatus} from '../../../app/app-reducer';
import {postsAPI} from '../../posts/posts-api';
import {setPosts} from '../../posts/posts-reducer';

const initialState = {
    users: [] as GetUserResType []
}

const slice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers(state, action: PayloadAction<{ users: GetUserResType [] }>) {
            debugger
            state.users = action.payload.users
        }
    }
});

export const {setUsers} = slice.actions;
export const usersReducer = slice.reducer;

export const getUsers = createAsyncThunk('users/getusers', async (_: void, thunkAPI) => {
    const {dispatch, getState} = thunkAPI;

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

export const deleteUser = createAsyncThunk('users/deleteUser', async (id:string, thunkAPI) => {
    const {dispatch} = thunkAPI;

    dispatch(setAppStatus({appStatus: 'loading'}));

    try {
        const response = await adminAPI.deleteUser(id);
    } catch (error: any) {

    } finally {
        dispatch(setAppStatus({appStatus: 'idle'}));
    }
});

export const createUser = createAsyncThunk('users/deleteUser', async (id:string, thunkAPI) => {
    const {dispatch} = thunkAPI;

    dispatch(setAppStatus({appStatus: 'loading'}));

    try {
        const response = await adminAPI.deleteUser(id);
    } catch (error: any) {

    } finally {
        dispatch(setAppStatus({appStatus: 'idle'}));
    }
});




