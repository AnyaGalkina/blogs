import React from 'react';
import {PostForm, ValuesType} from '../postForm/PostForm';
import {PostReqType} from '../../admin-api';

type PropsType = {
    onPublishClickHandler: (newPost: PostReqType) => void
}

const MAX_SHORT_DESCRIPTION_LENGTH = 100;


export const AddPost = ({onPublishClickHandler}: PropsType) => {

    const onPublishClick = ({title, content, blogId}: ValuesType) => {
        if(blogId) {
            const newPost: PostReqType = {
                title, content,
                shortDescription: content.substring(0, MAX_SHORT_DESCRIPTION_LENGTH),
                blogId
            };
            onPublishClickHandler(newPost);
        }
    }

    return (
        <div>
            <PostForm buttonTitle={'Publish'} onSubmitHandler={onPublishClick} isNewPost={true}/>
        </div>
    );
};