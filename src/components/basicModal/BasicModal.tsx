import {Button, Divider, Modal} from 'antd';
import React, {ReactNode, memo} from 'react';
import {AdminButton} from '../buttons/adminButton/AdminButton';
import style from './BasicModal.module.css';

type PropsType = {
    isModalOpen: boolean;
    okButtonTitle?: string;
    cancelButtonTitle?: string;
    handleOk?: () => void;
    handleCancel?: () => void;
    modalTitle: string;
    modalContent?: string;
    children?: ReactNode;
}


export const BasicModal = memo(({
                                    handleCancel,
                                    okButtonTitle,
                                    cancelButtonTitle,
                                    modalContent,
                                    modalTitle,
                                    isModalOpen,
                                    handleOk,
                                    children
                                }: PropsType) => {

    const showOkButton = handleOk && okButtonTitle;
    const showCancelButton = handleCancel && cancelButtonTitle;

    return (
        <>
            <Modal open={isModalOpen}
                   onCancel={handleCancel}
                   footer={[
                       <>
                           {showOkButton &&
                               <AdminButton title={okButtonTitle} onClickHandler={handleOk}/>
                           }
                       </>,
                       <>
                           {showCancelButton &&
                               <Button onClick={handleCancel}
                                       className={style.cancelButton}>{cancelButtonTitle}</Button>
                           }
                       </>
                   ]}
            >
                <div>
                    <h3>{modalTitle}</h3>

                    <Divider/>

                    <p>{modalContent}</p>
                    {children}
                </div>

            </Modal>
        </>
    );
});
