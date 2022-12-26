import React from 'react';
import {Flex} from '../../../../components/styled/Flex';
import {StyledFormButton} from '../../../../components/buttons/formButton/FormButton';
import {useNavigate, useParams} from 'react-router-dom';
import {PATH} from '../../../../common/enums/path';
import {useAppDispatch} from '../../../../common/hooks';
import mailConfirmation from '../../../../assets/images/confirmation.jpg';
import {sendConfirmationCode} from '../../auth-reducer';

export const MailConfirmed = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {code} = useParams();

    const onSignInClick = () => {
        if(code){
            dispatch(sendConfirmationCode({code}));
            navigate(`${PATH.AUTH}${PATH.LOGIN}`);
        }
        return
    }

    return (
        <Flex direction={'column'}>
            <h3>Congrats!</h3>
            <h3>Your Email has been confirmed</h3>
            <StyledFormButton onClick={onSignInClick}>Sign In</StyledFormButton>
            <div>
                <img style={{width: 360, margin: '10% 0'}} src={mailConfirmation} alt={'sing in'}/>
            </div>
        </Flex>
    );
};
