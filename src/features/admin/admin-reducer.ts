import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {setAppStatus} from '../../app/app-reducer';
import {adminAPI, NewBlogType} from './admin-api';


const initialState = {
    isAdmin: true
}

const slice = createSlice({
    name: 'admin',
    initialState,
    reducers: {}
})

export const adminReducer = slice.reducer;

export const addBlog = createAsyncThunk("admin/addBlog", async (params: NewBlogType, thunkAPI)  => {
    const {dispatch} = thunkAPI;
    dispatch(setAppStatus({appStatus: 'loading'}));
    try{
        const response = await adminAPI.addNewBlog(params);
        // dispatch()
    }catch (error: any) {

    }finally {
        dispatch(setAppStatus({appStatus: 'idle'}));

    }
});

export const deleteBlog = createAsyncThunk('admin/deleteBlog', async (id: string, thunkAPI) => {
    const {dispatch} = thunkAPI;
    dispatch(setAppStatus({appStatus: 'loading'}));
    try{
        const response = await adminAPI.deleteBlog(id);
    }catch (error: any) {

    }finally {
        dispatch(setAppStatus({appStatus: 'idle'}));

    }
});

type EditBlogReq= {
    blogId: string;
    params: NewBlogType;
}

export const editBlog = createAsyncThunk('', async ({blogId, params}: EditBlogReq, thunkAPI) => {
    const {dispatch} = thunkAPI;
    dispatch(setAppStatus({appStatus: 'loading'}));
    try{
        const response = await adminAPI.updateBlog(blogId, params);
    }catch (error: any) {

    }finally {
        dispatch(setAppStatus({appStatus: 'idle'}));

    }
});

export const deletePost = createAsyncThunk('admin/deleteBlog', async (id: string, thunkAPI) => {
    const {dispatch} = thunkAPI;
    dispatch(setAppStatus({appStatus: 'loading'}));
    try{
        const response = await adminAPI.deletePost(id);
    }catch (error: any) {

    }finally {
        dispatch(setAppStatus({appStatus: 'idle'}));

    }
});