import React, {useEffect, useState} from 'react';
import {Title} from '../../../components/title/Title';
import {BasicModal} from '../../../components/basicModal/BasicModal';
import {useAppDispatch} from '../../../common/hooks';
import {AdminButton} from '../../../components/adminButton/AdminButton';
import {createUser, getUsers} from './users-reducer';
import {useSelector} from 'react-redux';
import {getUsersSelector} from './users-selector';
import {Table} from 'antd';
import ColumnGroup from 'antd/es/table/ColumnGroup';
import DeleteOutlined from '@ant-design/icons/lib/icons/DeleteOutlined';
import {Flex} from '../../../components/styled/Flex';


export const UsersPage = () => {
    const dispatch = useAppDispatch();
    const users = useSelector(getUsersSelector);

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);

    const onDeleteClickHandler = () => {
        setIsDeleteModalOpen(true)
    }

    const onNoClickHandler = () => {
        setIsDeleteModalOpen(false);
    }

    const onYesClickHandler = () => {
        // dispatch(deleteUser(userId))
        setIsDeleteModalOpen(false);
    }

    const columns = [
        {
            title: 'Username',
            dataIndex: 'login',
            key: 'login'
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email'
        },
        {
            title: 'User Id',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: 'Data added',
            dataIndex: 'createdAt',
            key: 'createdAt'
        },
        {
            title: '',
            dataIndex: '',
            key: 'x',
            render: () => <DeleteOutlined onClick={onDeleteClickHandler}/>,
        },
    ];


    const onAddUserOpenModalClick = () => {
        setIsAddUserModalOpen(true);
    }

    const onAddUserClickHandler = () => {
        // dispatch(createUser)
        setIsAddUserModalOpen(false);
    }

    const onCancelClickHandler = () => {
        setIsAddUserModalOpen(false);
    }

    useEffect(() => {
        dispatch(getUsers());
    }, []);

    return (
        <div>
            <Title title={'Users'}/>
            <Flex justify={'end'}>
                <AdminButton title={'Add user'} onClickHandler={onAddUserOpenModalClick}/>
            </Flex>
            <div>
                {users &&
                    <Table columns={columns} dataSource={users}/>
                }
            </div>
            <BasicModal isModalOpen={isDeleteModalOpen}
                        modalTitle={'Delete User'}
                        modalContent={'Are you sure you want to delete this user? '}
                        okButtonTitle={'Yes'}
                        cancelButtonTitle={'No'}
                        handleCancel={onNoClickHandler}
                        handleOk={onYesClickHandler}
            />
            <BasicModal isModalOpen={isAddUserModalOpen} modalTitle={'Add User'} handleCancel={onCancelClickHandler}>
                <AdminButton title={'Add user'} onClickHandler={onAddUserClickHandler}/>
            </BasicModal>
        </div>
    );
};
