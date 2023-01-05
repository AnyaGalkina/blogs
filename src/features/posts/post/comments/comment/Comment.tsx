import React, {useState, memo, useCallback} from 'react';
import {CommentType} from '../../../posts-api';
import {Image} from '../../../../../components/image/Image';
import {Flex} from '../../../../../components/styled/Flex';
import {StyledGreyText} from '../../../../../components/styled/StyledGreyText';
import {formattedDate} from '../../../../../common/utils/dateConvertor';
import {useSelector} from 'react-redux';
import {
    getAccessTokenSelector,
    getIsLoggedInSelector,
    getUserIdSelector
} from '../../../../../common/selectors/selectors';
import {Item} from '../../../../../components/listItem/Item';
import {DropdownMenu} from '../../../../../components/listItem/dropdownMenu/DropdownMenu';
import {useAppDispatch} from '../../../../../common/hooks';
import {deleteComment, updateComment} from '../comments-reducer';
import {BasicModal} from '../../../../../components/basicModal/BasicModal';

export const Comment = memo(({comment}: { comment: CommentType }) => {
    const dispatch = useAppDispatch();

    const userId = useSelector(getUserIdSelector);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const {content, createdAt, userLogin, userId: authorId, id} = comment;
    const showDroppedMenu = userId === authorId;

    const onCommentDeleteClick = useCallback(() => {
        setIsModalOpen(true);
    }, [isModalOpen]);

    const onDeleteConfirmationClick = useCallback(() => {
        dispatch(deleteComment(id));
        setIsModalOpen(false);
    }, [isModalOpen, id]);
    ;

    const onCancelDeleteClick = () => {
        setIsModalOpen(false);
    };

    const onEditClickHandler = useCallback(() => {
        // dispatch(updateComment({commentId:, comment:}));
    }, [
        //    ??????
    ]);

    return (
        <div>

            <div>
                <Image
                    width={'50px'}
                    // margin={} radius={}
                    height={'50px'}
                    alt="blog image"
                />
            </div>
            <Flex justify={'start'}>
                <div>
                    <h3>{userLogin}</h3>
                    <StyledGreyText>{formattedDate(createdAt)}</StyledGreyText>
                </div>
                <div>{content}</div>
            </Flex>

            {showDroppedMenu
                ? <>
                    <DropdownMenu onDeleteClick={onCommentDeleteClick} onEditClick={onEditClickHandler}/>
                    <BasicModal isModalOpen={isModalOpen}
                                modalTitle={'Delete Comment'}
                                handleOk={onDeleteConfirmationClick}
                                handleCancel={onCancelDeleteClick}
                                modalContent={'Are you sure you want to delete comment?'}
                    />
                </>
                : ''
            }

        </div>
    );
});


