import React from 'react';
import {Flex} from '../../../components/styled/Flex';
import singIn from '../../../assets/images/signIn.png';
import {SignUpForm} from '../signUp/SignUpForm';
import {useAppDispatch} from '../../../common/hooks';
import {CreateUserPeqType} from '../../admin/admin-api';
import {PATH} from '../../../common/enums/path';
import {AuthLink} from '../authLink/AuthLink';

export const SignIn = () => {
    const dispatch = useAppDispatch();

    const onSignInClick = (params: CreateUserPeqType) => {
        // console.log(params)
        // dispatch();
    }

    return (
        <Flex justify={'space-around'}>
            <div style={{width: 360, margin: '10% 0', backgroundColor: '#fff'}}>
                <div style={{padding: '30px'}}>
                    <h2>Sign in</h2>
                    <SignUpForm onSubmitHandler={onSignInClick} buttonTitle={'Sign In'}/>
                </div>
                <AuthLink path={`${PATH.AUTH}${PATH.SIGN_UP}`} text={'Don\'t have an account?'} linkTitle={'Sign Up'}/>
            </div>

            <div>
                <img style={{width: 360, margin: '10% 0'}} src={singIn} alt={'sing in'}/>
            </div>

        </Flex>
    );
};
