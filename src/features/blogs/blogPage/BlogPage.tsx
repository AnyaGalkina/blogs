import React, {useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {Divider} from 'antd';
import {useAppDispatch} from '../../../common/hooks';
import {getPostsByBlogId} from '../../posts/posts-reducer';
import {getBlogById} from '../blogs-reducer';
import {Image} from '../../../components/image/Image';
import {PostItem} from '../../posts/postItem/PostItem';
import {formattedDate} from '../../../common/utils/dateConvertor';
import {Title} from '../../../components/title/Title';
import {getBlogByIdSelector, getPostsSelector} from '../../../common/selectors/selectors';
import {useSelector} from 'react-redux';
import {BlogInfo} from './blogInfo/BlogInfo';
import {GoBackButton} from '../../../components/buttons/goBackButton/GoBackButton';
import {PATH} from '../../../common/enums/path';


export const BlogPage = () => {
    const {blogId} = useParams();
    const navigate = useNavigate();

    const dispatch = useAppDispatch();
    const blog = useSelector(getBlogByIdSelector);
    // const posts = useAppSelector(state => state.postsPage.posts);
    const posts = useSelector(getPostsSelector);

    const onBackToBlogsClick = () => {
        navigate(PATH.BLOGS)
    }

    useEffect(() => {
        if (blogId) {
            dispatch(getBlogById(blogId));
            dispatch(getPostsByBlogId(blogId));
        }
    }, [])

    if (!blogId) {
        return null
    }

    return (
        <div>
            <Title title={'Blogs'} breadcrumbs={[{breadcrumbItem: blog.name}]}/>

            <GoBackButton onBackToClick={onBackToBlogsClick} buttonTitle={'blogs'}/>


            <div>
                <Image alt={'main blogPage image'}/>
            </div>

            <BlogInfo createdAt={blog.createdAt} blogName={blog.name} description={blog.description}
                      websiteUrl={blog.websiteUrl}/>

            <Divider/>

            <div>
                {posts && blogId
                    ? posts.map(post => {
                        return <PostItem key={post.id}
                                         blogId={blogId}
                                         title={post.title}
                                         description={post.shortDescription}
                                         id={post.id}
                                         createdAt={formattedDate(post.createdAt)}
                        />
                    })
                    : ''
                }

            </div>
        </div>

    )
        ;
};

