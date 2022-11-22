import {instance} from '../../common/api/config';
import {PATH} from '../../common/enums/path';

export const postsAPI = {
    getPosts() {
        return instance.get(PATH.POSTS);
    }
};

export type GetBlogResType = {
    pagesCount: number;
    page: number;
    pageSize: number;
    totalCount: number;
    items: Array<BlogType>;
};

export type BlogType = {
    id: string;
    name: string;
    description: string;
    websiteUrl: string;
    createdAt: string;
};