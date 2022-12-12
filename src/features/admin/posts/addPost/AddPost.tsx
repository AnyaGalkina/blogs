import React from 'react';
import {Title} from '../../../../components/title/Title';
import {PostForm, ValuesType} from '../postForm/PostForm';
import {useAppDispatch} from '../../../../common/hooks';
import {addPost, editPost} from '../../admin-reducer';
import {useParams} from 'react-router-dom';
import {PostReqType} from '../../admin-api';

type PropsType = {
    onPublishClickHandler: (newPost: PostReqType) => void
}

const MAX_SHORT_DESCRIPTION_LENGTH = 100;


export const AddPost = ({onPublishClickHandler}: PropsType) => {

    const onPublishClick = ({title, content}: ValuesType) => {
        const newPost: PostReqType = {
            title, content,
            shortDescription: content.substring(0,MAX_SHORT_DESCRIPTION_LENGTH),
            //add blog Id from selector
            blogId: ''
        };
        onPublishClickHandler(newPost);
    }

    return (
        <div>
            <PostForm buttonTitle={'Publish'} onSubmitHandler={onPublishClick} isNewPost={true}/>
        </div>
    );
};