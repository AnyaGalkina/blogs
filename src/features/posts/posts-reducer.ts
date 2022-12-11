import {createAsyncThunk, createSlice, Dispatch, PayloadAction} from '@reduxjs/toolkit';
import {PostByIdResType, postsAPI, PostType} from './posts-api';
import {setAppStatus} from '../../app/app-reducer';
import {blogsApi} from '../blogs/blogs-api';
import {setBlogs} from '../blogs/blogs-reducer';
import {Nullable} from '../../common/types/types';

const initialState = {
    posts: [] as Array<PostType>,
    post: null as Nullable<PostByIdResType>,
    pagesCount: 0,
    page: 1,
    pageSize: 15,
    totalCount: 0
};


const slice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts(state, action: PayloadAction<{ posts: Array<PostType> }>) {
            state.posts = action.payload.posts
        },
        setPost(state, action: PayloadAction<{ post: PostByIdResType}>) {
            state.post = action.payload.post
        }
    }
});

export const postsReducer = slice.reducer;
export const {setPosts, setPost} = slice.actions;

export const getPosts = () => async (dispatch: any) => {
    dispatch(setAppStatus({appStatus: 'loading'}));
    try{
       const response = await postsAPI.getPosts();
       dispatch(setPosts({posts: response.data.items}));
    } catch (error: any) {

    } finally {
        dispatch(setAppStatus({appStatus: 'idle'}));
    }
}



export const getPostsByBlogId = (blogId: string) => async (dispatch: Dispatch) => {
    dispatch(setAppStatus({appStatus: 'loading'}));
    try {

        const response = await blogsApi.getPostsByBlogId(blogId);
        dispatch(setPosts({posts: response.data.items}));


    } catch (error: any) {

    } finally {
        dispatch(setAppStatus({appStatus: 'idle'}));
    }
}


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