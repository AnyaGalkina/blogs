import { AxiosResponse } from 'axios';

import {instance} from '../../common/api/config';
import {PATH} from '../../common/enums/path';
import {GetItemsResType, PostType} from '../posts/posts-api';

export const blogsApi = {
    getBlogs() {
        return instance.get<GetItemsResType<BlogType>>(PATH.BLOGS);
    },
    getBlogById(blogId: string) {
        return instance.get<BlogType>(`${PATH.BLOGS}/${blogId}`);
    },
    getPostsByBlogId(blogId: string) {
        return instance.get<string,AxiosResponse<GetItemsResType<PostType>>>(`${PATH.BLOGS}/${blogId}/posts`);
    }
};

export type BlogType = {
    id: string;
    name: string;
    description: string;
    websiteUrl: string;
    createdAt: string;
};