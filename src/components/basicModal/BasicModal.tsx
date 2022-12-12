import {Button, Divider, Modal} from 'antd';
import React, {ReactFragment, ReactNode} from 'react';
import {AdminButton} from '../adminButton/AdminButton';
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


export const BasicModal = ({handleCancel, okButtonTitle, cancelButtonTitle, modalContent, modalTitle, isModalOpen, handleOk, children}: PropsType) => {
    return (
        <>
            <Modal open={isModalOpen}
                   footer={[
                       <>
                           {handleOk && okButtonTitle &&
                               <AdminButton title={okButtonTitle} onClickHandler={handleOk}/>
                           }
                       </>,
                     <>
                         {handleCancel && cancelButtonTitle &&
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
                {/*<div className={cancelButtonTitle ? style.buttonsBlock : style.buttonBlock}>*/}
                {/*    {handleOk && okButtonTitle &&*/}
                {/*        <AdminButton title={okButtonTitle} onClickHandler={handleOk}/>*/}
                {/*    }*/}
                {/*    {handleCancel && cancelButtonTitle &&*/}
                {/*        <Button onClick={handleCancel}*/}
                {/*                className={style.cancelButton}>{cancelButtonTitle}</Button>*/}
                {/*    }*/}
                {/*</div>*/}
            </Modal>
        </>
    );
};
