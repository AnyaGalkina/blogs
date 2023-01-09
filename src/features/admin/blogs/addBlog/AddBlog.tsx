import React from 'react';
import {useAppDispatch} from '../../../../common/hooks';
import {useNavigate} from 'react-router-dom';
import {PATH} from '../../../../common/enums/path';
import {addBlog} from '../../admin-reducer';
import {BlogForm} from '../blogForm/BlogForm';
import {Title} from '../../../../components/title/Title';
import {NewBlogType} from '../../admin-api';
import {GoBackButton} from '../../../../components/buttons/goBackButton/GoBackButton';


export const AddBlog = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onBackToBlogsClick = () => {
        navigate(PATH.BLOGS);
    }

    const onSubmitHandler = (params: NewBlogType) => {
        dispatch(addBlog(params));
        navigate(PATH.BLOGS);
    }

    return (
        <div>
            <Title title={'Blogs'} breadcrumbs={[{breadcrumbItem: "Add"}]}/>

            <GoBackButton onBackToClick={onBackToBlogsClick} buttonTitle={'blogs'}/>

            <BlogForm onSubmitHandler={onSubmitHandler} buttonTitle={'Add blog'}/>
        </div>
    );
};
