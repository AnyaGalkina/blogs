import React, {useState} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
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

    const onDeleteClickHandler = (event: any) => {
        setIsModalOpen(true);
        // event.stopPropagation();
    }

    const onOkClickHandler = () => {
        dispatch(deleteBlog(id));
        setIsModalOpen(false);
    }

    const onCancelClickHandler = () => {
        setIsModalOpen(false);
    }

    const onEditClickHandler = (event: any) => {
        navigate(`${PATH.EDIT_BLOG}/${id}`);
        // event.stopPropagation();
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
            />
        </>
    );
};
