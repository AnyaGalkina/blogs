import {CommentType, postsAPI} from '../../posts-api';
import {Nullable} from '../../../../common/types/types';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {GetPostsParamsType, PostsSortDirectionType, SortByType} from '../../posts-reducer';
import {setAppStatus} from '../../../../app/app-reducer';
import {AppRootStateType} from '../../../../app/store';

const defaultPortionSize = 10;

const initialState = {
    pagesCount: 0,
    page: 1,
    pageSize: defaultPortionSize,
    totalCount: 0,
    sortBy: null as Nullable<SortByType>,
    sortDirection: null as Nullable<PostsSortDirectionType>,
    comments: [] as Array<CommentType>,
};


const slice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        // setPostsFilter(state, action: PayloadAction<{ sortDirection: PostsSortDirectionType, sortBy: SortByType }>) {
        //     state.sortDirection = action.payload.sortDirection;
        //     state.sortBy = action.payload.sortBy;
        // },
        // setPostsPageSize(state, action: PayloadAction) {
        //     state.pageSize = state.pageSize + defaultPortionSize;
        // },
        setComments(state, action: PayloadAction<{ comments: Array<CommentType>; totalCount: number }>) {
            state.comments = action.payload.comments
            state.totalCount = action.payload.totalCount
        },
        setCommentsPageSize(state, action: PayloadAction) {
            state.pageSize = state.pageSize + defaultPortionSize;
        }
    }
});

export const commentsReducer = slice.reducer;
export const {setComments, setCommentsPageSize} = slice.actions;

export const addPostComment = createAsyncThunk('comments/addPostComment', async (params: { postId: string, comment: string }, thunkAPI) => {
    const {dispatch} = thunkAPI;

    dispatch(setAppStatus({appStatus: 'loading'}));
    try {
        const response = await postsAPI.addPostComment(params);
        dispatch(getPostComments(params.postId));
    } catch (error: any) {

    } finally {
        dispatch(setAppStatus({appStatus: 'idle'}));
    }

});


export const deleteComment = createAsyncThunk('comments/deletePostComment', async (params: {commentId: string, postId:string}, thunkAPI) => {
    const {dispatch} = thunkAPI;
    const {commentId, postId} = params;

    dispatch(setAppStatus({appStatus: 'loading'}));
    try {
        const response = await postsAPI.deleteComment(commentId);
        dispatch(getPostComments(postId));
    } catch (error: any) {

    } finally {
        dispatch(setAppStatus({appStatus: 'idle'}));
    }

});

export const updateComment = createAsyncThunk('comments/updatePostComment', async (params: {postId: string, commentId: string, comment: string }, thunkAPI) => {
    const {dispatch} = thunkAPI;
    const {postId, comment, commentId} = params;

    dispatch(setAppStatus({appStatus: 'loading'}));
    try {
        const response = await postsAPI.updatePostComment({comment, commentId});
        dispatch(getPostComments(postId));
    } catch (error: any) {

    } finally {
        dispatch(setAppStatus({appStatus: 'idle'}));
    }

});


export const getPostComments = createAsyncThunk('comments/getPostComments', async (postId: string, thunkAPI) => {
    const {dispatch, getState} = thunkAPI;
    const state = getState() as AppRootStateType;
    const {sortDirection, pageSize, page, sortBy} = state.comments;

    let params: GetPostsParamsType = {};

    if (sortBy && sortDirection) {
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
        const response = await postsAPI.getPostComments(postId, params);
        dispatch(setComments({comments: response.data.items, totalCount: response.data.totalCount}));
    } catch (error: any) {

    } finally {
        dispatch(setAppStatus({appStatus: 'idle'}));
    }
})

