import React, {useEffect, useState} from 'react';
import {Title} from '../../../components/title/Title';
import {BasicModal} from '../../../components/basicModal/BasicModal';
import {useAppDispatch} from '../../../common/hooks';
import {AdminButton} from '../../../components/adminButton/AdminButton';
import {createUser, getUsers} from './users-reducer';
import {useSelector} from 'react-redux';
import {getUsersSelector} from './users-selector';
import {Flex} from '../../../components/styled/Flex';
import {AddUserForm} from './addUserForm/AddUserForm';
import {User} from './user/User';
import {StyledCellHeader} from '../../../components/styled/table/StyledRowHeader';
import {StyledTable} from '../../../components/styled/table/StyledTable';
import {CreateUsersPeqType} from '../admin-api';

const rows = ['Username', 'Email', 'User Id', 'Data added', ''];


export const UsersPage = () => {
    const dispatch = useAppDispatch();
    const users = useSelector(getUsersSelector);

    const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);

    // const columns = [
    //     {
    //         title: 'Username',
    //         dataIndex: 'login',
    //         key: 'login'
    //     },
    //     {
    //         title: 'Email',
    //         dataIndex: 'email',
    //         key: 'email'
    //     },
    //     {
    //         title: 'User Id',
    //         dataIndex: 'id',
    //         key: 'id'
    //     },
    //     {
    //         title: 'Data added',
    //         dataIndex: 'createdAt',
    //         key: 'createdAt'
    //     },
    //     {
    //         title: '',
    //         dataIndex: '',
    //         key: 'deleteBtn',
    //         render: (_, record: { key: React.Key }) => <DeleteOutlined
    //             onClick={() => onDeleteClickHandler(record.key)}/>,
    //     },
    // ];

    const onAddUserOpenModalClick = () => {
        setIsAddUserModalOpen(true);
    }

    const onAddUserClickHandler = (params: CreateUsersPeqType) => {
        dispatch(createUser(params));
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
            <Flex justify={'end'} margin={'32px 0px'}>
                <AdminButton title={'Add user'} onClickHandler={onAddUserOpenModalClick}/>
            </Flex>
            <div>
                <StyledTable>
                    <tr>
                        {rows.map((row, index) => {
                            return (
                                <StyledCellHeader key={index}>{row}</StyledCellHeader>
                            )
                        })}
                    </tr>
                    {users &&
                        users.map(user => {
                            return <User key={user.id} user={user}/>
                        })}
                </StyledTable>
            </div>
            <BasicModal isModalOpen={isAddUserModalOpen} modalTitle={'Add User'} handleCancel={onCancelClickHandler}>
                <AddUserForm onSubmitHandler={onAddUserClickHandler}/>
            </BasicModal>
        </div>
    );
};
