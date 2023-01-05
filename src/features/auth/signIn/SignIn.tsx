import React from 'react';
import {Flex} from '../../../components/styled/Flex';
import singIn from '../../../assets/images/signIn.png';
import {useAppDispatch} from '../../../common/hooks';
import {PATH} from '../../../common/enums/path';
import {AuthLink} from '../authLink/AuthLink';
import {SignInForm} from './SignInForm';
import {LoginReqType} from '../auth-api';
import {login} from '../auth-reducer';
import {useNavigate} from 'react-router-dom';

export const SignIn = () => {
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const onSignInClick = (params: LoginReqType) => {
        dispatch(login(params));
        navigate(PATH.BLOGS);
    }

    return (
        <Flex justify={'space-around'}>
            <div style={{width: 360, margin: '10% 0', backgroundColor: '#fff'}}>
                <div style={{padding: '30px'}}>
                    <h2>Sign in</h2>
                    <SignInForm onSubmitHandler={onSignInClick} buttonTitle={'Sign In'}/>
                </div>
                <AuthLink path={PATH.SIGN_UP} text={'Don\'t have an account?'} linkTitle={'Sign Up'}/>
            </div>

            <div>
                <img style={{width: 360, margin: '10% 0'}} src={singIn} alt={'sing in'}/>
            </div>

        </Flex>
    );
};
