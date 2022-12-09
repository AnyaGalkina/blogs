import {createSlice, Dispatch, PayloadAction} from '@reduxjs/toolkit';
import {blogsApi, BlogType} from './blogs-api';
import {setAppStatus} from '../../app/app-reducer';

const initialState = {
    blogs: [] as Array<BlogType>,
    pagesCount: 0,
    page: 1,
    pageSize: 15,
    totalCount: 0
};


const slice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {
        setBlogs(state, action: PayloadAction<{ blogs: Array<BlogType> }>) {
            state.blogs = action.payload.blogs;
        },
    },
});

export const blogsReducer = slice.reducer;
export const {setBlogs} = slice.actions;


export const getBlogs = () => async (dispatch: any) => {
    dispatch(setAppStatus({appStatus: 'loading'}));
    try {
        const response = await blogsApi.getBlogs();
        dispatch(setBlogs({blogs: response.data.items}));
    } catch (error: any) {

    } finally {
        dispatch(setAppStatus({appStatus: 'idle'}));
    }
};



export const getBlogById  = (blogId: string) => async (dispatch: Dispatch) => {
    dispatch(setAppStatus({appStatus: 'loading'}));
    try {
        const response = await blogsApi.getBlogById(blogId);
        dispatch(setBlogs({blogs: [response.data]}));
    } catch (error: any) {

    } finally {
        dispatch(setAppStatus({appStatus: 'idle'}));
    }
}