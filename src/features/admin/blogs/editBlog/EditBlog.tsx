import React, {useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {PATH} from '../../../../common/enums/path';
import {Title} from '../../../../components/title/Title';
import {ArrowLeftOutlined} from '@ant-design/icons';
import {BlogForm} from '../blogForm/BlogForm';
import {editBlog} from '../../admin-reducer';
import {NewBlogType} from '../../admin-api';
import {useAppDispatch} from '../../../../common/hooks';
import {getBlogById} from '../../../blogs/blogs-reducer';
import {useSelector} from 'react-redux';
import {getBlogByIdSelector} from '../../../../common/selectors/selectors';


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


    return (
        blogId ?
            <div>
                <Title title={'Blogs'}
                       breadcrumbs={[{
                           // breadcrumbLink: `${PATH.BLOGS}/${blogId}${PATH.POSTS}`,
                           breadcrumbItem: blog.name
                       }, {breadcrumbItem: 'Edit'}]}
                />
                <div>
                    <span onClick={onBackToBlogsClick}><ArrowLeftOutlined/> Back to blogs</span>
                </div>
                <BlogForm onSubmitHandler={onSubmitHandler} buttonTitle={'Edit blog'}/>
            </div>
            : <div>

            </div>
    );
};
