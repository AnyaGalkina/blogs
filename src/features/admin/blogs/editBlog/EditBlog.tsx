import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {PATH} from '../../../../common/enums/path';
import {Title} from '../../../../components/title/Title';
import {ArrowLeftOutlined} from '@ant-design/icons';
import {BlogForm} from '../blogForm/BlogForm';
import {editBlog} from '../../admin-reducer';
import {NewBlogType} from '../../admin-api';
import {useAppDispatch} from '../../../../common/hooks';


export const EditBlog = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {blogId} = useParams();


    const onBackToBlogsClick = () => {
        navigate(PATH.BLOGS);
    }

    const  onSubmitHandler = (params: NewBlogType) => {
        if (blogId) {
            dispatch(editBlog({blogId, params}));
            navigate(PATH.BLOGS);
        }
    }

    return (
        <div>
            <Title title={'Blogs'}/>
            <div>
                <span onClick={onBackToBlogsClick}><ArrowLeftOutlined/> Back to blogs</span>
            </div>
            <BlogForm  onSubmitHandler={onSubmitHandler} buttonTitle={'Edit blog'}/>
        </div>
    );

};
