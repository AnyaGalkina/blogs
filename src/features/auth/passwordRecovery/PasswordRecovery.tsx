import React, {useState} from 'react';
import {Flex} from '../../../components/styled/Flex';
import {useAppDispatch} from '../../../common/hooks';
import {PATH} from '../../../common/enums/path';
import {passwordRecovery} from '../auth-reducer';
import {useSelector} from 'react-redux';
import {getEmailSelector} from '../../../common/selectors/selectors';
import {RecoveryPasswordForm, RecoveryPasswordValuesType} from './recoveryPasswordForm/RecoveryPasswordForm';
import {EmailConfirmationModal} from '../emailConfirmationModal/EmailConfirmationModal';
import {AuthLink} from '../authLink/AuthLink';

export const PasswordRecovery = () => {
    const dispatch = useAppDispatch();
    const email = useSelector(getEmailSelector);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onSendInstructionsClick = (params: RecoveryPasswordValuesType) => {
        dispatch(passwordRecovery(params));
        setIsModalOpen(true);
    }

    const onOkClickHandler = () => {
        setIsModalOpen(false);

    };


    return (
        <>
            <Flex>
                <div style={{width: 360, margin: '10% 0', backgroundColor: '#fff'}}>
                    <h2>Forgot Password</h2>
                    <RecoveryPasswordForm onSubmitHandler={onSendInstructionsClick}/>
                    <AuthLink path={PATH.LOGIN} linkTitle={'Back to Sign In'}/>
                </div>
            </Flex>
            {email
                ? <EmailConfirmationModal email={email}
                                          isModalOpen={isModalOpen}
                                          onOkClick={onOkClickHandler}
                />
                : ''
            }
        </>
    );
};
