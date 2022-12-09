import {instance} from '../../common/api/config';
import {AxiosResponse} from 'axios';


export const adminAPI = {
    addNewBlog(params: NewBlogType) {
        return instance.post<NewBlogType, AxiosResponse<NewBlogResType>>('/blogs', params)
    },
    updateBlog(blogId: string, params: NewBlogType) {
        return instance.put<NewBlogType, AxiosResponse>(`/blogs/${blogId}`, params)
    },
    deleteBlog(blogId: string) {
        return instance.delete<AxiosResponse>(`/blogs/${blogId}`)
    },
    addNewPost() {
        return instance.post('', )
    },
    // updatePost(blogId: string, params: NewBlogType) {
    //     return instance.put<NewBlogType, AxiosResponse>(`/post/${blogId}`, params)
    // },
    deletePost(postId: string) {
        return instance.delete<AxiosResponse>(`/blogs/${postId}`)
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