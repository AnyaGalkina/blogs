import {AppRootStateType} from '../../../app/store';
import {GetUserResType} from '../admin-api';

export const getUsersSelector = (state: AppRootStateType): GetUserResType[] => state.usersPage.users;