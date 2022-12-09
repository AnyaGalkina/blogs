import React from 'react';
import {useAppDispatch} from '../../../../common/hooks';
import {useNavigate} from 'react-router-dom';
import {PATH} from '../../../../common/enums/path';
import {addBlog, editBlog} from '../../admin-reducer';
import {BlogForm} from '../blogForm/BlogForm';
import {Title} from '../../../../components/title/Title';
import {ArrowLeftOutlined} from '@ant-design/icons';
import {NewBlogType} from '../../admin-api';

// const MAX_LENGTH = 500;
// const re = /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;
//


export const AddBlog = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onBackToBlogsClick = () => {
        navigate(PATH.BLOGS);
    }

    const onSubmitHandler = (params: NewBlogType) => {
        dispatch(addBlog(params));
    }

    return (
        <div>
            <Title title={'Blogs'}/>
            <div>
                <span onClick={onBackToBlogsClick}><ArrowLeftOutlined/> Back to blogs</span>
            </div>
            <BlogForm onSubmitHandler={onSubmitHandler} buttonTitle={'Add blog'}/>
        </div>
    );
};
