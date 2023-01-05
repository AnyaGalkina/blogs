import React from 'react';
import {PATH} from '../../../common/enums/path';
import {Blogs} from '../../../features/blogs/Blogs';
import {BlogPage} from '../../../features/blogs/blogPage/BlogPage';
import {AddBlog} from '../../../features/admin/blogs/addBlog/AddBlog';
import {EditBlog} from '../../../features/admin/blogs/editBlog/EditBlog';
import {Posts} from '../../../features/posts/Posts';
import {PostPage} from '../../../features/posts/post/PostPage';
import {PageNotFound} from '../../pageNotFound';
import {Navigate, Route, Routes} from 'react-router-dom';
import {Content} from 'antd/es/layout/layout';
import styled from 'styled-components';
import {UsersPage} from '../../../features/admin/users/UsersPage';
import {SignIn} from '../../../features/auth/signIn/SignIn';
import { SignUp } from '../../../features/auth/signUp/SignUp';
import {MailConfirmed} from '../../../features/auth/signUp/mailConfirmed/MailConfirmed';

const routes = [
    {path: PATH.BLOGS, component: <Blogs/>},
    {path: `${PATH.BLOGS}/:blogId${PATH.POSTS}`, component: <BlogPage/>},
    {path: PATH.ADD_BLOG, component: <AddBlog/>},
    {path: `${PATH.EDIT_BLOG}/:blogId`, component: <EditBlog/>},
    {path: PATH.POSTS, component: <Posts/>},
    {path: `${PATH.POSTS}/:postId`, component: <PostPage/>},
    {path: PATH.USERS, component: <UsersPage/>},
    {path: PATH.PAGE_NOT_FOUND, component: <PageNotFound/>},
    {path: PATH.PAGE_NOT_FOUND, component: <PageNotFound/>},
    {path: PATH.LOGIN, component: <SignIn/>},
    {path: PATH.SIGN_UP, component: <SignUp/>},
    {path: PATH.SIGN_UP_CONFIRMATION, component: <MailConfirmed/>},
];

const StyledContent = styled(Content)`
  padding: 0 5% 0 2%;
`

export const StyledRoutes = () => {
    return (
        <StyledContent>
            <Routes>
                <Route path="/" element={<Navigate to={PATH.LOGIN}/>}/>
                {routes.map(({path, component}, index) => {
                    return (
                        <Route key={index} path={path} element={component}/>
                    )
                })}
                <Route path="*" element={<Navigate to={PATH.PAGE_NOT_FOUND}/>}/>
            </Routes>
        </StyledContent>
    );
};
