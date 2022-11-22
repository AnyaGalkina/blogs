import {combineReducers, configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {blogsReducer} from '../features/blogs/blogs-reducer';
import {postsReducer} from '../features/posts/posts-reducer';
import {appReducer} from './app-reducer';

const rootReducer = combineReducers({
    blogsPage: blogsReducer,
    postsPage: postsReducer,
    app: appReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk),
    devTools: true,
});

export type AppRootStateType = ReturnType<typeof rootReducer>;