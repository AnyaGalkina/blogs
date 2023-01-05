import {instance, instanceWithCredentials} from '../../common/api/config';
import {PATH} from '../../common/enums/path';
import {CreateUserPeqType} from '../admin/admin-api';
import {loadState} from '../../common/utils/local-storage';


export const authAPI = {
    getMe() {

        const accessToken = loadState();

        return instance.get<AuthMeResParamsType>(PATH.ME, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
    },
    login(params: LoginReqType) {
        return instance.post<AccessTokenType>(PATH.LOGIN, params);
    },
    registration(params: CreateUserPeqType) {
        return instance.post(PATH.SIGN_UP, params);
    },
    confirmEmail(params: { code: string }) {
        return instance.post(PATH.SIGN_UP_CONFIRMATION, params);
    },
    refreshToken() {
        return instanceWithCredentials.post(PATH.REFRESH_TOKEN);
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

export type AccessTokenType = {
    accessToken: string;
}