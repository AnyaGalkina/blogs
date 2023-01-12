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
import {UsersPage} from '../../../features/admin/users/UsersPage';
import {SignIn} from '../../../features/auth/signIn/SignIn';
import {SignUp} from '../../../features/auth/signUp/SignUp';
import {MailConfirmed} from '../../../features/auth/signUp/mailConfirmed/MailConfirmed';
import {ComponentWithSideBar} from '../../../common/hoc/ComponentWithSideBar';
import {PasswordRecovery} from '../../../features/auth/passwordRecovery/PasswordRecovery';
import {CreateNewPassword} from '../../../features/auth/createNewPassword/CreateNewPassword';

const routesWithoutLinearBar = [
    {path: PATH.LOGIN, component: <SignIn/>},
    {path: PATH.SIGN_UP, component: <SignUp/>},
    {path: PATH.SIGN_UP_CONFIRMATION, component: <MailConfirmed/>},
    {path: PATH.FORGOT_PASSWORD, component: <PasswordRecovery/>},
    {path: `${PATH.SET_NEW_PASSWORD}`, component: <CreateNewPassword/>},

]

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
];


export const StyledRoutes = () => {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Navigate to={PATH.LOGIN}/>}/>
                {routesWithoutLinearBar.map(({path, component}, index) => {
                    return (
                        <Route key={index} path={path} element={component}/>
                    )
                })}
                {routes.map(({path, component}, index) => {
                    return (
                        <Route key={index} path={path} element={ComponentWithSideBar(component)}/>
                    )
                })}
                <Route path="*" element={<Navigate to={PATH.PAGE_NOT_FOUND}/>}/>
            </Routes>
        </div>
    );
};
