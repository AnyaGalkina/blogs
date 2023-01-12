import React, {useState} from 'react';
import {Flex} from '../../../components/styled/Flex';
import {SignUpForm} from './SignUpForm';
import singIn from '../../../assets/images/signIn.png';
import {useAppDispatch} from '../../../common/hooks';
import {PATH} from '../../../common/enums/path';
import {AuthLink} from '../authLink/AuthLink';
import {useSelector} from 'react-redux';
import {getEmailSelector} from '../../../common/selectors/selectors';
import {signUp} from '../auth-reducer';
import {CreateUserPeqType} from '../../admin/admin-api';
import {EmailConfirmationModal} from '../emailConfirmationModal/EmailConfirmationModal';

export const SignUp = () => {
    const dispatch = useAppDispatch();
    const email = useSelector(getEmailSelector);
    const [isModalOpen, setIsModalOpen] = useState(false);


    const onSignUpClick = (params: CreateUserPeqType) => {
        dispatch(signUp(params));
        setIsModalOpen(true);
    }

    const  onOkClickHandler = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Flex justify={'space-around'}>
                <div style={{width: 360, margin: '10% 0', backgroundColor: '#fff'}}>
                    <div style={{padding: '30px'}}>
                        <h2>Sign Up</h2>
                        <SignUpForm onSubmitHandler={onSignUpClick} buttonTitle={'Sign Up'} isSignUp={email}/>
                        <AuthLink path={PATH.LOGIN} text={'Already a member?'} linkTitle={'Sign In'}/>
                    </div>
                </div>
                <div>
                    <img style={{width: 360, margin: '10% 0'}} src={singIn} alt={'sing in'}/>
                </div>
            </Flex>
            {email ?
                <EmailConfirmationModal email={email}
                                        isModalOpen={isModalOpen}
                                        onOkClick={onOkClickHandler}
                />
                : ''
            }
        </>
    );
};
