import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {blogsApi, BlogType} from './blogs-api';

const initialState = {
    blogs: [] as Array<BlogType>,
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

    try{
        const response = await blogsApi.getBlogs();
        dispatch(setBlogs({blogs: response.data.items}));
    } catch (error: any) {

    } finally {

    }
};
