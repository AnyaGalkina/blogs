import {AppRootStateType} from '../../app/store';
import {BlogType} from '../../features/blogs/blogs-api';
import {PostByIdResType, PostType} from '../../features/posts/posts-api';
import {AppStatusType} from '../../app/app-reducer';
// @ts-ignore
import {Nullable} from '../types/types';

export const getBlogsSelector = (state: AppRootStateType): Array<BlogType> => state.blogsPage.blogs;
export const getBlogByIdSelector = (state: AppRootStateType): BlogType => state.blogsPage.blogs[0];

export const getPostsSelector = (state: AppRootStateType): Array<PostType>=> state.postsPage.posts;
export const getPostByIdSelector = (state: AppRootStateType): Nullable<PostByIdResType> => state.postsPage.post;


export const getAppErrorSelector = (state: AppRootStateType): Nullable<string> => state.app.appError;
export const getAppStateSelector = (state: AppRootStateType): AppStatusType => state.app.appStatus;