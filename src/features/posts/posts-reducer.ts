import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {postsAPI, PostType} from './posts-api';
import {setAppStatus} from '../../app/app-reducer';

const initialState = {
    posts: [] as Array<PostType>,
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
        }
    }
});

export const postsReducer = slice.reducer;
export const {setPosts} = slice.actions;

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