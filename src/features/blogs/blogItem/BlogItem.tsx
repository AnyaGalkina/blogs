import React, {useState, useCallback} from 'react';
import {useNavigate} from 'react-router-dom';
import {PATH} from '../../../common/enums/path';
import {Item} from '../../../components/listItem/Item';
import {Divider} from 'antd';
import {BasicModal} from '../../../components/basicModal/BasicModal';
import {useAppDispatch} from '../../../common/hooks';
import {deleteBlog} from '../../admin/admin-reducer';
import {Flex} from '../../../components/styled/Flex';

type PropsType = {
    title: string;
    description: string;
    websiteUrl: string;
    id: string;
}


export const BlogItem = ({title, description, websiteUrl, id}: PropsType) => {
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const onDeleteClickHandler = () => {
        setIsModalOpen(true);
    }

    const onOkClickHandler = () => {
        dispatch(deleteBlog(id));
        setIsModalOpen(false);
    }

    const onCancelClickHandler = useCallback(() => {
        setIsModalOpen(false);
    }, [isModalOpen]);

    const onEditClickHandler = useCallback(() => {
        navigate(`${PATH.EDIT_BLOG}/${id}`);
    }, []);

    return (
        <>
            <Flex justify={'space-between'}>
                <Item
                    title={title}
                    description={description}
                    websiteUrl={websiteUrl}
                    justifyBlock={'start'}
                    imgWidth={'300px'}
                    imgHeight={'200px'}
                    id={id}
                    onEditClick={onEditClickHandler}
                    onDeleteClick={onDeleteClickHandler}
                    path={`${PATH.BLOGS}/${id}${PATH.POSTS}`}
                />
            </Flex>

            <Divider/>

            <BasicModal isModalOpen={isModalOpen}
                        handleOk={onOkClickHandler}
                        handleCancel={onCancelClickHandler}
                        modalTitle={'Delete a blog'}
                        modalContent={'Are you sure you want to delete this blog?'}
                        okButtonTitle={'Ok'}
                        cancelButtonTitle={'Cancel'}
            />

        </>
    );
};
