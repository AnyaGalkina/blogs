import {createAsyncThunk, createSlice, Dispatch, PayloadAction} from '@reduxjs/toolkit';
import {blogsApi, BlogType} from './blogs-api';
import {setAppStatus} from '../../app/app-reducer';
import {Nullable} from '../../common/types/types';
import {GetPostsParamsType, PostsSortDirectionType, SortByType} from '../posts/posts-reducer';
import {AppRootStateType} from '../../app/store';

export type BlogsSortDirectionType = PostsSortDirectionType | 'startFromA' | 'startFromZ';

const initialState = {
    blogs: [] as Array<BlogType>,
    pagesCount: 0,
    page: 1,
    pageSize: 15,
    totalCount: 0,
    sortBy: null as Nullable<SortByType>,
    sortDirection: null as Nullable<BlogsSortDirectionType>,
    searchNameTerm: ''
};


const slice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {
        setBlogs(state, action: PayloadAction<{ blogs: Array<BlogType> }>) {
            state.blogs = action.payload.blogs;
        },
        setFilter(state, action: PayloadAction<{ sortDirection: BlogsSortDirectionType, sortBy: SortByType }>) {
            state.sortDirection = action.payload.sortDirection
            state.sortBy = action.payload.sortBy
        },
        setSearchNameTerm(state, action: PayloadAction<{ searchNameTerm: string }>) {
            state.searchNameTerm = action.payload.searchNameTerm
        },
    },
});

export const blogsReducer = slice.reducer;
export const {setBlogs, setFilter, setSearchNameTerm} = slice.actions;


export type GetBlogsParamsType = {
    sortDirection?: BlogsSortDirectionType;
    pageSize?: number;
    pageNumber?: number;
    sortBy?: string;
    searchNameTerm?: string;
}


export const getBlogs = createAsyncThunk('blogs/getBlogs', async (_: void, thunkAPI) => {
    const {dispatch, getState} = thunkAPI;
    dispatch(setAppStatus({appStatus: 'loading'}));
    debugger
    const state = getState() as AppRootStateType;
    const {sortDirection, pageSize, page, sortBy, searchNameTerm} = state.blogsPage;

    let params: GetBlogsParamsType = {};

    if(sortBy && sortDirection){
        params.sortBy = sortBy;
        params.sortDirection = sortDirection;
    }

    if (page > 1) {
        params.pageNumber = page;
    }
    if (pageSize !== 15) {
        params.pageSize = page;
    }

    if(searchNameTerm) {
        params.searchNameTerm = searchNameTerm
    }

    try {
        const response = await blogsApi.getBlogs(params);
        dispatch(setBlogs({blogs: response.data.items}));
    } catch (error: any) {

    } finally {
        dispatch(setAppStatus({appStatus: 'idle'}));
    }
});


export const getBlogById = (blogId: string) => async (dispatch: Dispatch) => {
    dispatch(setAppStatus({appStatus: 'loading'}));
    try {
        const response = await blogsApi.getBlogById(blogId);
        dispatch(setBlogs({blogs: [response.data]}));
    } catch (error: any) {

    } finally {
        dispatch(setAppStatus({appStatus: 'idle'}));
    }
}