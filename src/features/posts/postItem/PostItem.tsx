import React, {useState} from 'react';
import {Item} from '../../../components/listItem/Item';
import {useAppDispatch} from '../../../common/hooks';
import {PATH} from '../../../common/enums/path';
import {BasicModal} from '../../../components/basicModal/BasicModal';
import {deletePost, editPost} from '../../admin/admin-reducer';
import {EditPost} from '../../admin/posts/editPost/EditPost';
import {PostReqType} from '../../admin/admin-api';
import {Flex} from '../../../components/styled/Flex';

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

    const onEditClickHandler = () => {
        setIsAddPostModalOpen(true);
    }

    const onPublishClickHandler = (params: PostReqType) => {
        dispatch(editPost({postId: id, params}));
        setIsAddPostModalOpen(false);
    }

    const onCancelEditClickHandler = () => {
        setIsAddPostModalOpen(false);
    }

    /*.postItemBlock {*/
    /*    width: 320px;*/
    /*             display: flex;*/
    /*             flex-direction: row;*/
    /*    justify-content: start;*/
    /*           align-items: center;*/
    /*    flex-wrap: wrap;*/
    /*    margin-right: 30px;*/
    /*}*/

    /*.postImg {*/
    /*    width: 320px*/

    /*    !*width: 70px;*!*/
    /*    !*height: 70px;*!*/
    /*    !*border-radius: 50%;*!*/
    /*}*/


    return (
        <>

            <div
                style={{width: '320px'}}
            >
                <Flex justify={'start'} wrap={'wrap'} margin={'10px'}>
                    <Item id={id}
                          title={title}
                          description={description}
                          createdAt={createdAt}
                          justifyBlock={'start'}
                          wrapBlock={'wrap'}
                          marginBlock={'30px'}
                          imgWidth={'320px'}
                        // imgHeight={'70px'}
                        // imgradius={'50%'}
                        // styleContainer={style.postItemContainer}
                        // styleBlock={style.postItemBlock}


                        // styleImg={style.postImg}
                        // styleText={style.postText}
                          onEditClick={onEditClickHandler}
                          onDeleteClick={onDeleteClickHandler}
                          path={`${PATH.POSTS}/${id}`}
                    />
                </Flex>
            </div>
            <BasicModal isModalOpen={isModalOpen}
                        handleOk={onOkClickHandler}
                        handleCancel={onCancelClickHandler}
                        okButtonTitle={'Ok'}
                        cancelButtonTitle={'Cancel'}
                        modalTitle={'Delete a post'}
                        modalContent={'Are you sure you want to delete this post?'}
            />
            <BasicModal isModalOpen={isAddPostModalOpen} modalTitle={'Edit Post'} modalContent={''}
                        handleCancel={onCancelEditClickHandler}>
                <EditPost blogId={blogId} onPublishClickHandler={onPublishClickHandler}/>
            </BasicModal>
        </>
    );
};
