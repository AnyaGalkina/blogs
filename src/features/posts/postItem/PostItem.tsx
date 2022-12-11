import React, {useState} from 'react';
import style from '../Posts.module.css';
import {Item} from '../../../components/listItem/Item';
import {useAppDispatch} from '../../../common/hooks';
import {useNavigate} from 'react-router-dom';
import {PATH} from '../../../common/enums/path';
import {BasicModal} from '../../../components/basicModal/BasicModal';
import {deletePost} from '../../admin/admin-reducer';

type PropsType = {
    id: string;
    title: string;
    createdAt: string;
    description: string;
}


export const PostItem = ({title, id, createdAt, description}: PropsType) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const onDeleteClickHandler = (event: any) => {
        setIsModalOpen(true);
        event.stopPropagation();
    }

    const onOkClickHandler = () => {
        dispatch(deletePost(id));
        setIsModalOpen(false);
    }

    const onCancelClickHandler = () => {
        setIsModalOpen(false);
    }

    const onEditClickHandler = (event: any) => {
        navigate(`${PATH.EDIT_POST}/${id}`);
        event.stopPropagation();
    }


    return (
        <div>
            <Item id={id}
                  title={title}
                  description={description}
                  createdAt={createdAt}
                  styleContainer={style.postItemContainer}
                  styleBlock={style.postItemBlock}
                  styleImg={style.postImg}
                  styleText={style.postText}
                  onEditClick={onEditClickHandler}
                  onDeleteClick={onDeleteClickHandler}
                  path={`${PATH.POSTS}/${id}`}
            />
            <BasicModal isModalOpen={isModalOpen}
                        handleOk={onOkClickHandler}
                        handleCancel={onCancelClickHandler}
                        modalTitle={'Delete a post'}
                        modalContent={'Are you sure you want to delete this post?'}
            />
        </div>
    );
};
