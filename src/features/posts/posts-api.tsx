import {instance} from '../../common/api/config';
import {PATH} from '../../common/enums/path';

export const postsAPI = {
    getPosts() {
        return instance.get<GetItemsResType<PostType>>(PATH.POSTS);
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