import React from 'react';
import {BasicModal} from '../../../components/basicModal/BasicModal';

type PropsType = {
    email: string;
    isModalOpen: boolean;
    onOkClick: () => void;
}

export const EmailConfirmationModal = ({email, isModalOpen, onOkClick }: PropsType) => {
    return (
        <BasicModal isModalOpen={isModalOpen} modalTitle={'Email sent'}
                    modalContent={`We have sent a link to confirm your email to ${email}`}
                    handleCancel={onOkClick}
                    cancelButtonTitle={'Ok'}
        />
    );
};
