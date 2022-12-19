import {AppRootStateType} from '../../app/store';

export const getIsAdmin = (state: AppRootStateType): boolean => state.admin.isAdmin;