import axios from 'axios';
import {instance} from '../../common/api/config';
import {PATH} from '../../common/enums/path';
import {GetPostsParamsType} from './posts-reducer';
import {AxiosResponse} from 'axios';
import {loadState} from '../../common/utils/local-storage';
import {AuthMeResParamsType} from '../auth/auth-api';

export const postsAPI = {
    getPosts(params: GetPostsParamsType) {
        return instance.get<GetItemsResType<PostType>>(PATH.POSTS, {params});
    },
    getPostById(postId: string) {
        return instance.get<PostByIdResType>(`${PATH.POSTS}/${postId}`);
    },
    getPostComments(postId: string, params: GetPostsParamsType) {
        return instance.get<CommentType[]>(`${PATH.POSTS}/${postId}${PATH.COMMENTS}`, {params});
    },
    addPostComment(params: { postId: string, comment: string }) {
        const {postId, comment} = params;
        const accessToken = loadState();

        return axios.post<CommentType>(`${PATH.POSTS}/${postId}${PATH.COMMENTS}`, {comment}, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
    },
    updatePostComment(params: { commentId: string, comment: string }) {
        const {commentId, comment} = params;
        // return instanceBearer.put<{ id: string }, AxiosResponse>(`${PATH.COMMENTS}/${commentId}`, {comment});
    },
    deleteComment(commentId: string) {
        // return instanceBearer.delete<{ id: string }, AxiosResponse>(`${PATH.COMMENTS}/${commentId}`);
    },
};

export type GetItemsResType<T> = {
    pagesCount: number;
    page: number;
    pageSize: number;
    totalCount: number;
    items: Array<T>;
};

export type PostType = {
    id: string;
    title: string;
    shortDescription: string;
    content: string;
    blogId: string;
    blogName: string;
    createdAt: string;
}

export type PostByIdResType = PostType & { extendedLikesInfo: ExtendedLikesInfoType };

export type ExtendedLikesInfoType = {
    likesCount: number;
    dislikesCount: number;
    myStatus: string;
    newestLikes: NewestLikesType[];
}

export type NewestLikesType = {
    addedAt: string;
    userId: string;
    login: string;
}

export type CommentType = {
    id: string;
    content: string;
    userId: string;
    userLogin: string;
    createdAt: string;
    likesInfo: LikesType;
}
export type LikesType = {
    likesCount: number;
    dislikesCount: number;
    myStatus: string;
}