import {AxiosResponse} from 'axios';
import {instance} from '../../common/api/config';
import {PATH} from '../../common/enums/path';
import {GetItemsResType, PostType} from '../posts/posts-api';
import {GetBlogsParamsType} from './blogs-reducer';

export const blogsApi = {
    getBlogs(params: GetBlogsParamsType) {
        return instance.get<GetItemsResType<BlogType>>(PATH.BLOGS, {params});
    },
    getBlogById(blogId: string) {
        return instance.get<BlogType>(`${PATH.BLOGS}/${blogId}`);
    },
    getPostsByBlogId(blogId: string ) {
        return instance.get<GetItemsResType<PostType>>(`${PATH.BLOGS}/${blogId}${PATH.POSTS}`);
    }
};

export type BlogType = {
    id: string;
    name: string;
    description: string;
    websiteUrl: string;
    createdAt: string;
};