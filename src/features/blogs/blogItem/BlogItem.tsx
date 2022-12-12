import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import style from '../Blogs.module.css';
import {PATH} from '../../../common/enums/path';
import {Item} from '../../../components/listItem/Item';
import {Divider} from 'antd';
import {BasicModal} from '../../../components/basicModal/BasicModal';
import {useAppDispatch} from '../../../common/hooks';
import {deleteBlog} from '../../admin/admin-reducer';

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

    const onCancelClickHandler = () => {
        setIsModalOpen(false);
    }

    const onEditClickHandler = () => {
        navigate(`${PATH.EDIT_BLOG}/${id}`);
    }

    return (
        <>
            <Item
                title={title}
                description={description}
                websiteUrl={websiteUrl}
                styleContainer={style.blogItemContainer}
                styleBlock={style.blogItemBlock}
                styleImg={style.blogImg}
                styleText={style.blogText}
                id={id}
                onEditClick={onEditClickHandler}
                onDeleteClick={onDeleteClickHandler}
                path={`${PATH.BLOGS}/${id}${PATH.POSTS}`}
            />
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
