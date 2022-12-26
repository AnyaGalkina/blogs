import {instance} from '../../common/api/config';
import {AxiosResponse} from 'axios';
import {GetItemsResType, PostByIdResType} from '../posts/posts-api';
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
    // getUsers(params) {
    //     return instance.get(PATH.USERS, params);
    // },
    getUsers() {
        return instance.get<GetItemsResType<GetUserResType>>(PATH.USERS);
    },
    createUser(params: CreateUserPeqType) {
        return instance.post<CreateUserPeqType, AxiosResponse<GetUserResType>>(PATH.USERS, params);
    },
    deleteUser(id: string) {
        return instance.delete<{id: string}, AxiosResponse>(`${PATH.USERS}/${id}`);

    }

}
export type GetUserResType = {
	id: string;
	login: string;
	email: string;
	createdAt: string;
}
export type CreateUserPeqType = {
    login: string;
    password: string;
    email: string;
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
