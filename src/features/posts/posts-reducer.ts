import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {PostByIdResType, postsAPI, PostType} from './posts-api';
import {setAppStatus} from '../../app/app-reducer';
import {blogsApi} from '../blogs/blogs-api';
import {Nullable} from '../../common/types/types';
import {AppRootStateType} from '../../app/store';

export type PostsSortDirectionType = 'desc' | 'asc';
export type SortByType = 'name' | 'createdAt';
const defaultPortionSize = 10;


const initialState = {
    posts: [] as Array<PostType>,
    post: null as Nullable<PostByIdResType>,
    pagesCount: 0,
    page: 1,
    pageSize: defaultPortionSize,
    totalCount: 0,
    sortBy: null as Nullable<SortByType>,
    sortDirection: null as Nullable<PostsSortDirectionType>,
};


const slice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts(state, action: PayloadAction<{ posts: Array<PostType> }>) {
            state.posts = action.payload.posts;
        },
        setPost(state, action: PayloadAction<{ post: PostByIdResType }>) {
            state.post = action.payload.post;
        },
        setPostsFilter(state, action: PayloadAction<{ sortDirection: PostsSortDirectionType, sortBy: SortByType }>) {
            state.sortDirection = action.payload.sortDirection;
            state.sortBy = action.payload.sortBy;
        },
        setPostsPageSize(state, action: PayloadAction) {
            state.pageSize = state.pageSize + defaultPortionSize;
        }

    }
});

export const postsReducer = slice.reducer;
export const {setPosts, setPost, setPostsFilter, setPostsPageSize} = slice.actions;

export const getPosts =  createAsyncThunk('posts/getPosts', async (_: void, thunkAPI) => {
    let {dispatch, getState} = thunkAPI;
    dispatch(setAppStatus({appStatus: 'loading'}));
    const state = getState() as AppRootStateType
    const {sortDirection, pageSize, page, sortBy} = state.postsPage;

    let params: GetPostsParamsType = {};

    if(sortBy && sortDirection){
        params.sortBy = sortBy;
        params.sortDirection = sortDirection;
    }

    if (page > 1) {
        params.pageNumber = page;
    }
    if (pageSize !== defaultPortionSize) {
        params.pageSize = pageSize;
    }

    dispatch(setAppStatus({appStatus: 'loading'}));
    try {
        const response = await postsAPI.getPosts(params);
        dispatch(setPosts({posts: response.data.items}));
    } catch (error: any) {

    } finally {
        dispatch(setAppStatus({appStatus: 'idle'}));
    }
});

export type GetPostsParamsType = {
    sortDirection?: PostsSortDirectionType;
    pageSize?: number;
    pageNumber?: number;
    sortBy?: string;
}

export const getPostsByBlogId = createAsyncThunk('/', async (blogId: string, thunkAPI) => {
    const {dispatch} = thunkAPI;

    try {
        const response = await blogsApi.getPostsByBlogId(blogId);
        dispatch(setPosts({posts: response.data.items}));
    } catch (error: any) {

    } finally {
        dispatch(setAppStatus({appStatus: 'idle'}));
    }
});


export const getPostById = createAsyncThunk('posts/postById', async (postId: string, thunkAPI) => {
    const {dispatch} = thunkAPI;
    dispatch(setAppStatus({appStatus: 'loading'}));
    try {
        const response = await postsAPI.getPostById(postId);
        dispatch(setPost({post: response.data}));
    } catch (error: any) {

    } finally {
        dispatch(setAppStatus({appStatus: 'idle'}));
    }
})