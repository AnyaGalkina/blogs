import {instance} from '../../common/api/config';

export const blogAPI = {
    getBlogs() {
        return instance.get<GetBlogResType>('/blogs');
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