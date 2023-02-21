import {combineReducers, configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {blogsReducer} from '../features/blogs/blogs-reducer';
import {postsReducer} from '../features/posts/posts-reducer';
import {appReducer} from './app-reducer';
import {adminReducer} from '../features/admin/admin-reducer';
import {usersReducer} from '../features/admin/users/users-reducer';
import {commentsReducer} from '../features/posts/post/comments/comments-reducer';
import {authReducer} from '../features/auth/auth-reducer';
import {saveState, loadState} from '../common/utils/local-storage';
import {personalSettingsReducer} from '../features/personalSettings/personalSettings-reducer';

const rootReducer = combineReducers({
    blogsPage: blogsReducer,
    postsPage: postsReducer,
    usersPage: usersReducer,
    app: appReducer,
    admin: adminReducer,
    comments: commentsReducer,
    auth: authReducer,
    personalSettings: personalSettingsReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk),
    preloadedState: {
        ...rootReducer,
        // @ts-ignore
        auth: { ...rootReducer.auth, accessToken: loadState() },
    },
    devTools: true,
});

store.subscribe(() => {
    saveState(store.getState().auth.accessToken);
});

export type AppRootStateType = ReturnType<typeof rootReducer>;