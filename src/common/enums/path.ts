import {PersonalSettings} from '../../features/personalSettings/PersonalSettings';

export enum PATH {
    BLOGS = '/blogs',
    ADD_BLOG = '/add-blog',
    EDIT_BLOG = '/edit-blog',
    POSTS = '/posts',
    COMMENTS = '/comments',
    USERS = '/users',
    PAGE_NOT_FOUND = '/404',
    ME = '/auth/me',
    LOGIN = '/auth/login',
    SIGN_UP = '/auth/registration',
    SIGN_UP_CONFIRMATION = '/auth/registration--confirmation/:code',
    REFRESH_TOKEN = '/auth/refresh-token',
    LOGOUT = '/auth/logout',
    FORGOT_PASSWORD = '/auth/password-recovery',
    SET_NEW_PASSWORD = '/auth/new-password',
    PERSONAL_SETTINGS = '/security/devices'
}