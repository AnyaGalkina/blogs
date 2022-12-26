import {instance} from '../../common/api/config';
import {PATH} from '../../common/enums/path';
import {CreateUserPeqType} from '../admin/admin-api';


export const authAPI = {
    getMe() {
        return instance.get<AuthMeResParamsType>(`${PATH.AUTH}/me`);
    },
    login(params: LoginReqType) {
        return instance.post(`${PATH.AUTH}${PATH.LOGIN}`, params);
    },
    registration(params: CreateUserPeqType) {
        return instance.post(`${PATH.AUTH}${PATH.SIGN_UP}`, params);
    },
    confirmEmail(params: {code: string}) {
        return instance.post(`${PATH.AUTH}${PATH.SIGN_UP}-confirmation`, params);

    }

};

export type AuthMeResParamsType = {
    email: string;
    login: string;
    userId: string;
}

export type LoginReqType = {
    loginOrEmail: string;
    password: string;
}
