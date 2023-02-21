import {AppRootStateType} from '../../app/store';
import {BlogType} from '../../features/blogs/blogs-api';
import {CommentType, PostByIdResType, PostType} from '../../features/posts/posts-api';
import {AppStatusType} from '../../app/app-reducer';
// @ts-ignore
import {Nullable} from '../types/types';
import {PostsSortDirectionType, SortByType} from '../../features/posts/posts-reducer';
import {BlogsSortDirectionType} from '../../features/blogs/blogs-reducer';

export const getBlogsSelector = (state: AppRootStateType): Array<BlogType> => state.blogsPage.blogs;
export const getBlogByIdSelector = (state: AppRootStateType): BlogType => state.blogsPage.blogs[0];
export const getBlogsSortedBySelector = (state: AppRootStateType): Nullable<SortByType> => state.blogsPage.sortBy;
export const getBlogsSortDirectionSelector = (state: AppRootStateType): Nullable<BlogsSortDirectionType> => state.blogsPage.sortDirection;
export const getSearchNameTermSelector = (state: AppRootStateType): string => state.blogsPage.searchNameTerm;
export const getBlogsPageSizeSelector = (state: AppRootStateType): number => state.blogsPage.pageSize;
export const getBlogsPageSelector = (state: AppRootStateType): number => state.blogsPage.page;



export const getPostsSelector = (state: AppRootStateType): Array<PostType>=> state.postsPage.posts;
export const getPostByIdSelector = (state: AppRootStateType): Nullable<PostByIdResType> => state.postsPage.post;
export const getPostsSortedBySelector = (state: AppRootStateType): Nullable<SortByType> => state.postsPage.sortBy;
export const getPostsSortDirectionSelector = (state: AppRootStateType): Nullable<PostsSortDirectionType> => state.postsPage.sortDirection;
export const getPostsPageSizeSelector = (state: AppRootStateType): number => state.postsPage.pageSize;
export const getPostCommentsSelector = (state: AppRootStateType): CommentType[] => state.comments.comments;
export const getTotalCountPostCommentsSelector = (state: AppRootStateType): number => state.comments.totalCount;
export const getPageSizeCommentsSelector = (state: AppRootStateType): number => state.comments.pageSize;
// export const getPostByIdSelector = (state: AppRootStateType): Nullable<PostByIdResType> => state.postsPage.post;

export const getAppErrorSelector = (state: AppRootStateType): Nullable<string> => state.app.appError;
export const getAppStateSelector = (state: AppRootStateType): AppStatusType => state.app.appStatus;
export const getIsInitializedSelector = (state: AppRootStateType): boolean => state.app.isInitialized;


export const getEmailSelector = (state: AppRootStateType): string => state.auth.email;
export const getIsLoggedInSelector = (state: AppRootStateType): boolean => state.auth.isLoggedIn;
export const getUserNameSelector = (state: AppRootStateType): string => state.auth.userName;
export const getUserIdSelector = (state: AppRootStateType): string => state.auth.userId;
export const getAccessTokenSelector = (state: AppRootStateType): string => state.auth.accessToken;

