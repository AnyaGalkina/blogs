import {AppRootStateType} from '../../app/store';
import {BlogType} from '../../features/blogs/blogs-api';
import {PostType} from '../../features/posts/posts-api';
import {AppStatusType} from '../../app/app-reducer';
// @ts-ignore
import {Nullable} from '../types/types';

export const getBlogsSelector = (state: AppRootStateType): Array<BlogType>=> state.blogsPage.blogs;

export const getPostsSelector = (state: AppRootStateType): Array<PostType>=> state.postsPage.posts;


export const getAppErrorSelector = (state: AppRootStateType): Nullable<string> => state.app.appError;
export const getAppStateSelector = (state: AppRootStateType): AppStatusType => state.app.appStatus;