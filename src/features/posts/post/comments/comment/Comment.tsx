import React, {memo, useCallback, useState} from 'react';
import {CommentType} from '../../../posts-api';
import {Image} from '../../../../../components/image/Image';
import {Flex} from '../../../../../components/styled/Flex';
import {StyledGreyText} from '../../../../../components/styled/StyledGreyText';
import {formattedDate} from '../../../../../common/utils/dateConvertor';
import {useSelector} from 'react-redux';
import {getUserIdSelector} from '../../../../../common/selectors/selectors';
import {DropdownMenu} from '../../../../../components/listItem/dropdownMenu/DropdownMenu';
import {useAppDispatch} from '../../../../../common/hooks';
import {deleteComment, updateComment} from '../comments-reducer';
import {BasicModal} from '../../../../../components/basicModal/BasicModal';
import {EditableComment} from './editableComment/EditableComment';
import styled from 'styled-components';
import {CommentHeader} from './commentHeader/CommentHeader';

export const StyledComment = styled.div`
  position: relative;
  margin: 40px auto;
  padding: 20px;
  //width: 400px;
  //height: 350px;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 5px 14px rgba(0, 0, 0, .2);
`

type PropsType = { comment: CommentType, postId: string };

export const Comment = memo(({comment, postId}: PropsType) => {
    const dispatch = useAppDispatch();

    const userId = useSelector(getUserIdSelector);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditeMode, setIsEditeMode] = useState(false);

    const {content, createdAt, userLogin, userId: authorId, id} = comment;
    const showDroppedMenu = userId === authorId;
    console.log('userId', userId, authorId, 'authorId', showDroppedMenu)

    const onCommentDeleteClick = useCallback(() => {
        setIsModalOpen(true);
    }, [isModalOpen]);

    const onDeleteConfirmationClick = useCallback(() => {
        dispatch(deleteComment({commentId: id, postId}));
        setIsModalOpen(false);
    }, [isModalOpen, id, postId]);

    const onCancelDeleteClick = () => {
        setIsModalOpen(false);
    };

    const onEditClickHandler = () => {
        setIsEditeMode(true);
    };

    const onEditCancelClickHandler = useCallback(() => {
        setIsEditeMode(false);
    }, [isEditeMode]);

    const onEditCommentClickHandler = useCallback((newContent: string) => {
        dispatch(updateComment({comment: newContent, commentId: id, postId}));
        setIsEditeMode(false);
    }, [isEditeMode, id, postId]);

    return (
        <StyledComment>
            <Flex justify={'space-between'}>
                <CommentHeader userLogin={userLogin} createdAt={createdAt}/>

                <div>
                    {showDroppedMenu
                        ? <>
                            <DropdownMenu onDeleteClick={onCommentDeleteClick} onEditClick={onEditClickHandler}/>
                            <BasicModal isModalOpen={isModalOpen}
                                        modalTitle={'Delete Comment'}
                                        handleOk={onDeleteConfirmationClick}
                                        okButtonTitle={'Ok'}
                                        cancelButtonTitle={'Cancel'}
                                        handleCancel={onCancelDeleteClick}
                                        modalContent={'Are you sure you want to delete comment?'}
                            />
                        </>
                        : ''
                    }
                </div>
            </Flex>

            <div style={{margin: '30px'}}>
                {isEditeMode
                    ? <EditableComment onEditCommentClickHandler={onEditCommentClickHandler}
                                       currentContent={content}
                                       onEditCancelClickHandler={onEditCancelClickHandler}
                    />
                    : <span>{content}</span>
                }
            </div>

        </StyledComment>
    );
});


