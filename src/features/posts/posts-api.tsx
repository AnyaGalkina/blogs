import {instance} from '../../common/api/config';
import {PATH} from '../../common/enums/path';

export const postsAPI = {
    getPosts() {
        return instance.get<GetItemsResType<PostType>>(PATH.POSTS);
    },
    getPostById(postId: string) {
        return instance.get<PostByIdResType>(`${PATH.POSTS}/${postId}`);
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