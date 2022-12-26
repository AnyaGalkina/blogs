import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useAppDispatch} from '../../../../common/hooks';
import {addPostComment, getPostComments, setCommentsPageSize} from './comments-reducer';
import {Comment} from './comment/Comment';
import {
    getPageSizeCommentsSelector,
    getPostCommentsSelector,
    getTotalCountPostCommentsSelector
} from '../../../../common/selectors/selectors';
import {ShowMoreButton} from '../../../../components/buttons/showMoreButton/ShowMoreButton';
import {AddCommentForm} from './comment/addCommentForm/AddCommentForm';

type PropsType = {
    postId: string
}

export const Comments = ({postId}: PropsType) => {
    const dispatch = useAppDispatch();
    const comments = useSelector(getPostCommentsSelector);
    const totalCount = useSelector(getTotalCountPostCommentsSelector);
    const pageSize = useSelector(getPageSizeCommentsSelector);

    const onShowMoreClick = () => {
        dispatch(setCommentsPageSize());
    }

    const onAddCommentClick = ( comment: string ) => {
        debugger
        dispatch(addPostComment({postId, comment }));
    }


    useEffect(() => {
        dispatch(getPostComments(postId));
    }, [pageSize]);

    return (
        <div>
            <h2>Commets({totalCount && totalCount})</h2>
            {/*{ if loged in*/}
                <AddCommentForm onSubmitHandler={onAddCommentClick}/>

            {/*}*/}
            <div>
                {comments.length > 0 && postId &&
                    comments.map(comment => {
                        return (
                            <Comment key={comment.id} comment={comment}/>
                        )
                    })
                }
            </div>
            {totalCount ?  <ShowMoreButton onClickHandler={onShowMoreClick}/> : ''}
        </div>
    );
};
