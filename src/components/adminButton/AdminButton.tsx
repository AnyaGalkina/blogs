import React, {memo} from 'react';
import {Button} from 'antd';
import style from './AdminButton.module.css';

type PropsType = {
    title: string;
    onClickHandler: () => void;
}

export const AdminButton = memo(({title, onClickHandler}: PropsType) => {
    return (
        <Button className={style.adminButton} onClick={onClickHandler}>
            {title}
        </Button>
    );
});
