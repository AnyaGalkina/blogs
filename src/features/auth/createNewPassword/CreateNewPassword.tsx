import React, {useState} from 'react';
import {Flex} from '../../../components/styled/Flex';
import {useNavigate, useSearchParams} from 'react-router-dom';
import {PATH} from '../../../common/enums/path';
import {useAppDispatch} from '../../../common/hooks';
import {setNewPassword} from '../auth-reducer';
import {BasicModal} from '../../../components/basicModal/BasicModal';
import {CreateNewPasswordForm} from './createNewPasswordForm/CreateNewPasswordForm';


export const CreateNewPassword = () => {
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onCreateNewPasswordClick = (password: string) => {
        const recoveryCode = searchParams.get('recoveryCode');
        if(recoveryCode) {
            const params = {recoveryCode, newPassword: password}
            dispatch(setNewPassword(params));
            setIsModalOpen(true);
        }
    }

    const onOkClick = () => {
        setIsModalOpen(false);
        navigate(PATH.LOGIN)
    };

    return (
        <div>
            <Flex>
                <div style={{width: 360, margin: '10% 0', backgroundColor: '#fff'}}>
                    <h2>Create New Password</h2>
                    <CreateNewPasswordForm onSubmitHandler={onCreateNewPasswordClick}/>
                </div>
            </Flex>
            <BasicModal isModalOpen={isModalOpen} modalTitle={'New Password'}
                        modalContent={`Your new password has been saved successfully`}
                        handleCancel={onOkClick}
                        cancelButtonTitle={'Ok'}
            />
        </div>
    );
};
