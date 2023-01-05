import React, {useCallback, useEffect, useState} from 'react';
import {Title} from '../../../components/title/Title';
import {BasicModal} from '../../../components/basicModal/BasicModal';
import {useAppDispatch} from '../../../common/hooks';
import {AdminButton} from '../../../components/buttons/adminButton/AdminButton';
import {createUser, getUsers} from './users-reducer';
import {useSelector} from 'react-redux';
import {getUsersSelector} from './users-selector';
import {Flex} from '../../../components/styled/Flex';
import {SignUpForm} from '../../auth/signUp/SignUpForm';
import {User} from './user/User';
import {StyledCellHeader} from '../../../components/styled/table/StyledRowHeader';
import {StyledTable} from '../../../components/styled/table/StyledTable';
import {CreateUserPeqType} from '../admin-api';

const rows = ['Username', 'Email', 'User Id', 'Data added', ''];


export const UsersPage = () => {
    const dispatch = useAppDispatch();
    const users = useSelector(getUsersSelector);

    const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);

    const onAddUserOpenModalClick = () => {
        setIsAddUserModalOpen(true);
    }

    const onAddUserClickHandler =  useCallback((params: CreateUserPeqType) => {
        dispatch(createUser(params));
        setIsAddUserModalOpen(false);
    }, []);

    const onCancelClickHandler = useCallback(() => {
        setIsAddUserModalOpen(false);
    }, [])

    useEffect(() => {
        dispatch(getUsers());
    }, [isAddUserModalOpen]);

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
                <SignUpForm onSubmitHandler={onAddUserClickHandler} buttonTitle={'Add User'}/>
            </BasicModal>

        </div>
    );
};
