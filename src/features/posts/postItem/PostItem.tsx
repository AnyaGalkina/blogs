import React, {useState} from 'react';
import style from '../Posts.module.css';
import {Item} from '../../../components/listItem/Item';
import {useAppDispatch} from '../../../common/hooks';
import {PATH} from '../../../common/enums/path';
import {BasicModal} from '../../../components/basicModal/BasicModal';
import {deletePost, editPost} from '../../admin/admin-reducer';
import {EditPost} from '../../admin/posts/editPost/EditPost';
import {PostReqType} from '../../admin/admin-api';

type PropsType = {
    blogId: string;
    id: string;
    title: string;
    createdAt: string;
    description: string;
}


export const PostItem = ({blogId, title, id, createdAt, description}: PropsType) => {
    const dispatch = useAppDispatch();
    const [isAddPostModalOpen, setIsAddPostModalOpen] = useState(false);


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
        setIsAddPostModalOpen(true);
    }

    const onPublishClickHandler = (params: PostReqType) => {
        dispatch(editPost({postId:id, params}));
        setIsAddPostModalOpen(false);
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
                        okButtonTitle={'Ok'}
                        cancelButtonTitle={'Cancel'}
                        modalTitle={'Delete a post'}
                        modalContent={'Are you sure you want to delete this post?'}
            />
            <BasicModal isModalOpen={isAddPostModalOpen} modalTitle={"Edit Post"} modalContent={""}>
                <EditPost blogId={blogId} onPublishClickHandler={onPublishClickHandler}/>
            </BasicModal>
        </div>
    );
};
