import React, {useState, memo, useCallback} from 'react';
import DeleteOutlined from '@ant-design/icons/lib/icons/DeleteOutlined';
import {GetUserResType} from '../../admin-api';
import {BasicModal} from '../../../../components/basicModal/BasicModal';
import {useAppDispatch} from '../../../../common/hooks';
import {deleteUser} from '../users-reducer';
import {formattedDate} from '../../../../common/utils/dateConvertor';
import {Flex} from '../../../../components/styled/Flex';
import {StyledCell} from '../../../../components/styled/table/StyledCell';

type PropsType = {
    user: GetUserResType
}

export const User = memo(({user}: PropsType) => {
    const dispatch = useAppDispatch();
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const {id, email, login, createdAt} = user;

    const onDeleteClickHandler = () => {
        setIsDeleteModalOpen(true);
    }

    const onNoClickHandler = useCallback(() => {
        setIsDeleteModalOpen(false);
    }, [isDeleteModalOpen]);

    const onYesClickHandler = useCallback(() => {
        dispatch(deleteUser(id));
        setIsDeleteModalOpen(false);
    }, [isDeleteModalOpen, id]);

    return (
        <tr>

            <StyledCell>{login}</StyledCell>
            <StyledCell>{email}</StyledCell>
            <StyledCell>{id}</StyledCell>
            <StyledCell>{formattedDate(createdAt)}</StyledCell>
            <StyledCell>
                <Flex justify={'end'}>
                    <DeleteOutlined onClick={onDeleteClickHandler}/>
                </Flex>
            </StyledCell>

            <BasicModal isModalOpen={isDeleteModalOpen}
                        modalTitle={'Delete User'}
                        modalContent={'Are you sure you want to delete this user? '}
                        okButtonTitle={'Yes'}
                        cancelButtonTitle={'No'}
                        handleCancel={onNoClickHandler}
                        handleOk={onYesClickHandler}
            />

        </tr>
    );
});
