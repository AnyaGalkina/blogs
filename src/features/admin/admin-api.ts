import {instance} from '../../common/api/config';
import {AxiosResponse} from 'axios';
import {PostByIdResType} from '../posts/posts-api';
import { PATH } from '../../common/enums/path';


export const adminAPI = {
    addNewBlog(params: NewBlogType) {
        return instance.post<NewBlogType, AxiosResponse<NewBlogResType>>(PATH.BLOGS, params);
    },
    updateBlog(blogId: string, params: NewBlogType) {
        return instance.put<NewBlogType, AxiosResponse>(`${PATH.BLOGS}/${blogId}`, params);
    },
    deleteBlog(blogId: string) {
        return instance.delete<AxiosResponse>(`${PATH.BLOGS}/${blogId}`);
    },
    addNewPost(params: PostReqType) {
        debugger
        return instance.post<PostReqType, AxiosResponse<PostByIdResType>>( PATH.POSTS,params );
    },
    updatePost(blogId: string, params: PostReqType) {
        return instance.put<NewBlogType, AxiosResponse>(`${PATH.POSTS}/${blogId}`, params);
    },
    deletePost(postId: string) {
        return instance.delete<AxiosResponse>(`${PATH.POSTS}/${postId}`);
    },
}


export type NewBlogResType = {
	id: string;
	name: string;
	description: string;
	websiteUrl: string;
	createdAt: string;
}

export type NewBlogType = {
    name: string;
    description: string;
    websiteUrl: string;
}

export type PostReqType = {
    title: string;
    shortDescription: string;
    content: string;
    blogId: string;
}
