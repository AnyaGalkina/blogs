import {Button, Divider, Modal} from 'antd';
import React from 'react';

type PropsType = {
    isModalOpen: boolean;
    handleOk: () => void;
    handleCancel: () => void;
    modalTitle: string;
    modalContent?: string;
}


export const BasicModal = ({handleCancel, modalContent, modalTitle, isModalOpen, handleOk}: PropsType) => {
    return (
        <>
            <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <div>
                <h3>{modalTitle}</h3>
                <Divider/>
                <p>{modalContent}</p>
            </div>
            </Modal>
        </>
    );
};
