import React, {memo} from 'react';
import {PostForm, ValuesType} from '../postForm/PostForm';
import {PostReqType} from '../../admin-api';

type PropsType = {
    blogId: string;
    onPublishClickHandler: (newPost: PostReqType) => void
}

const MAX_SHORT_DESCRIPTION_LENGTH = 100;


export const EditPost = memo(({blogId, onPublishClickHandler}: PropsType) => {

    const onPublishClick = ({title, content}: ValuesType) => {
        const newPost: PostReqType = {
            title, content,
            shortDescription: content.substring(0, MAX_SHORT_DESCRIPTION_LENGTH),
            blogId
        };
        onPublishClickHandler(newPost);
    }

    return (
        <div>
            <PostForm buttonTitle={'Publish'} onSubmitHandler={onPublishClick} isNewPost={false}/>
        </div>
    );
});
