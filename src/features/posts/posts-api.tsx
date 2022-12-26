import {instance} from '../../common/api/config';
import {PATH} from '../../common/enums/path';
import {GetPostsParamsType} from './posts-reducer';
import {AxiosResponse} from 'axios';

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
    addPostComment(postId: string, comment: string) {
        return instance.post<CommentType>(`${PATH.POSTS}/${postId}${PATH.COMMENTS}`, {comment});
    },
    // getComments() {
    //
    // },
    deleteComment(commentId: string) {
        return instance.delete<{ id: string }, AxiosResponse>(`${PATH.COMMENTS}/${commentId}`);
    },
    updateComment() {

    }

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