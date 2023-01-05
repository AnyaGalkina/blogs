import React, {memo} from 'react';
import {Dropdown, MenuProps} from 'antd';
import {DeleteOutlined, EditOutlined, MoreOutlined} from '@ant-design/icons';

type PropsType = {
    onDeleteClick:(event: any)  => void;
    onEditClick:(event: any)  => void;
}


export const DropdownMenu = memo(({onDeleteClick, onEditClick}: PropsType) => {

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <span onClick={onDeleteClick}>
                    <DeleteOutlined/> Delete
                </span>
            ),
        },
        {
            key: '2',
            label: (
                <span onClick={onEditClick}>
                    <EditOutlined/> Edit
                </span>
            ),
        }
    ]

    return (
        <div style={{width: '50px', textAlign: 'center'}}>
            <Dropdown menu={{items}} placement="bottomRight">
                <MoreOutlined/>
            </Dropdown>
        </div>
    );
});
