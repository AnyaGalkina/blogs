import React, {ChangeEvent, useState} from 'react';
import {useAppDispatch} from '../../../common/hooks';
import {setSearchNameTerm} from '../../blogs/blogs-reducer';
import {Input} from 'antd';
import {SearchOutlined} from '@ant-design/icons';


export const Search = () => {
    const dispatch = useAppDispatch();
    const [newValue, setNewValue] = useState('');

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setNewValue(event.target.value);
    }

    const onEnterPressHandler = (event: KeyboardEvent<HTMLInputElement> ) => {
        if(event.code === 'Enter') {
            dispatch(setSearchNameTerm({searchNameTerm: newValue}));
        }
    }

    return (
        <div>
            <Input
                placeholder="Search"
                type={'text'}
                value={newValue}
                onChange={onChangeHandler}
                onKeyDown={onEnterPressHandler}
                prefix={<SearchOutlined />}
            />
        </div>
    );
};
