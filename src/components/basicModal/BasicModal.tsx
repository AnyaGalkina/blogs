import {Divider, Modal} from 'antd';
import React, {ReactNode} from 'react';

type PropsType = {
    isModalOpen: boolean;
    handleOk: () => void;
    handleCancel: () => void;
    modalTitle: string;
    modalContent?: string;
    children?: ReactNode;
}


export const BasicModal = ({handleCancel, modalContent, modalTitle, isModalOpen, handleOk, children}: PropsType) => {
    return (
        <>
            <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <div>
                <h3>{modalTitle}</h3>
                <Divider/>
                <p>{modalContent}</p>
                {children}
            </div>
            </Modal>
        </>
    );
};
