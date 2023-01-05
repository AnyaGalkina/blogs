import React, {useEffect, memo, useCallback} from 'react';
import {useSelector} from 'react-redux';
import {useAppDispatch} from '../../../../common/hooks';
import {addPostComment, getPostComments, setCommentsPageSize} from './comments-reducer';
import {Comment} from './comment/Comment';
import {
    getAccessTokenSelector,
    getIsLoggedInSelector,
    getPageSizeCommentsSelector,
    getPostCommentsSelector,
    getTotalCountPostCommentsSelector
} from '../../../../common/selectors/selectors';
import {ShowMoreButton} from '../../../../components/buttons/showMoreButton/ShowMoreButton';
import {AddCommentForm} from './comment/addCommentForm/AddCommentForm';

type PropsType = {
    postId: string
}

export const Comments = memo(({postId}: PropsType) => {
    const dispatch = useAppDispatch();

    const comments = useSelector(getPostCommentsSelector);
    const totalCount = useSelector(getTotalCountPostCommentsSelector);
    const pageSize = useSelector(getPageSizeCommentsSelector);
    const isLoggedIn = useSelector(getIsLoggedInSelector);

    const showComments = comments.length > 0 && postId;

    const onShowMoreClick = useCallback(() => {
        dispatch(setCommentsPageSize());
    }, [dispatch]);

    const onAddCommentClick = (comment: string) => {
        dispatch(addPostComment({postId, comment}));
    }

    useEffect(() => {
        dispatch(getPostComments(postId));
    }, [pageSize]);

    return (
        <div>

            <h2>Comments({totalCount && totalCount})</h2>

            {isLoggedIn &&
                <AddCommentForm onSubmitHandler={onAddCommentClick}/>
            }

            <div>
                {showComments &&
                    comments.map(comment => {
                        return <Comment key={comment.id} comment={comment}/>
                    })
                }
            </div>

            {totalCount ? <ShowMoreButton onClickHandler={onShowMoreClick}/> : ''}

        </div>
    );
});
