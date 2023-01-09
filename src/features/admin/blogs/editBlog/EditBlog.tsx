import React, {useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {PATH} from '../../../../common/enums/path';
import {Title} from '../../../../components/title/Title';
import {BlogForm} from '../blogForm/BlogForm';
import {editBlog} from '../../admin-reducer';
import {NewBlogType} from '../../admin-api';
import {useAppDispatch} from '../../../../common/hooks';
import {getBlogById} from '../../../blogs/blogs-reducer';
import {useSelector} from 'react-redux';
import {getBlogByIdSelector} from '../../../../common/selectors/selectors';
import {GoBackButton} from '../../../../components/buttons/goBackButton/GoBackButton';


export const EditBlog = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {blogId} = useParams();
    const blog = useSelector(getBlogByIdSelector);


    const onBackToBlogsClick = () => {
        navigate(PATH.BLOGS);
    }

    const onSubmitHandler = (params: NewBlogType) => {
        if (blogId) {
            dispatch(editBlog({blogId, params}));
            navigate(PATH.BLOGS);
        }
    }

    useEffect(() => {
        if (blogId) {
            dispatch(getBlogById(blogId));
        }
    }, [])


    if (!blogId) {
        return null;
    }

    return (
        <div>

            <Title title={'Blogs'}
                   breadcrumbs={[{breadcrumbItem: blog.name}, {breadcrumbItem: 'Edit'}]}
            />

            <GoBackButton onBackToClick={onBackToBlogsClick} buttonTitle={'blogs'}/>

            <BlogForm onSubmitHandler={onSubmitHandler}
                      buttonTitle={'Edit blog'}
                      initialName={blog.name}
                      initialWebsite={blog.websiteUrl}
                      initialDescription={blog.description}
            />

        </div>
    );
};
