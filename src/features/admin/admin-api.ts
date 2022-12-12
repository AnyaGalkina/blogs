import {instance} from '../../common/api/config';
import {AxiosResponse} from 'axios';
import {PostByIdResType, PostType} from '../posts/posts-api';


export const adminAPI = {
    addNewBlog(params: NewBlogType) {
        return instance.post<NewBlogType, AxiosResponse<NewBlogResType>>('/blogs', params);
    },
    updateBlog(blogId: string, params: NewBlogType) {
        return instance.put<NewBlogType, AxiosResponse>(`/blogs/${blogId}`, params);
    },
    deleteBlog(blogId: string) {
        return instance.delete<AxiosResponse>(`/blogs/${blogId}`);
    },
    addNewPost(params: PostReqType) {
        debugger
        return instance.post<PostReqType, AxiosResponse<PostByIdResType>>('/posts',params );
    },
    updatePost(blogId: string, params: PostReqType) {
        return instance.put<NewBlogType, AxiosResponse>(`/post/${blogId}`, params);
    },
    deletePost(postId: string) {
        return instance.delete<AxiosResponse>(`/blogs/${postId}`);
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
