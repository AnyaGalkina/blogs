import {useAppSelector} from '../../common/hooks';
import {AppRootStateType} from '../../app/store';

export const getIsAdmin = (state: AppRootStateType) => state.admin.isAdmin;