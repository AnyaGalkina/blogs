import {combineReducers, configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {blogsReducer} from '../features/blogs/blogs-reducer';

const rootReducer = combineReducers({
    blogsPage: blogsReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk),
    devTools: true,
});

export type AppRootStateType = ReturnType<typeof rootReducer>;