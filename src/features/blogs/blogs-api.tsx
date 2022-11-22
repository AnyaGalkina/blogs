import {instance} from '../../common/api/config';
import {PATH} from '../../common/enums/path';
import {GetItemsResType} from '../posts/posts-api';

export const blogsApi = {
    getBlogs() {
        return instance.get<GetItemsResType<BlogType>>(PATH.BLOGS);
    }
};
//
// export type GetBlogResType = {
//     pagesCount: number;
//     page: number;
//     pageSize: number;
//     totalCount: number;
//     items: Array<BlogType>;
// };

export type BlogType = {
    id: string;
    name: string;
    description: string;
    websiteUrl: string;
    createdAt: string;
};