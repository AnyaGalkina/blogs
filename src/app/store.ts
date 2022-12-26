import {combineReducers, configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {blogsReducer} from '../features/blogs/blogs-reducer';
import {postsReducer} from '../features/posts/posts-reducer';
import {appReducer} from './app-reducer';
import {adminReducer} from '../features/admin/admin-reducer';
import {usersReducer} from '../features/admin/users/users-reducer';
import {commentsReducer} from '../features/posts/post/comments/comments-reducer';
import {authReducer} from '../features/auth/auth-reducer';

const rootReducer = combineReducers({
    blogsPage: blogsReducer,
    postsPage: postsReducer,
    usersPage: usersReducer,
    app: appReducer,
    admin: adminReducer,
    comments: commentsReducer,
    auth: authReducer
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk),
    devTools: true,
});

export type AppRootStateType = ReturnType<typeof rootReducer>;