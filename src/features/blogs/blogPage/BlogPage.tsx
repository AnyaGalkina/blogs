import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Button, Divider} from 'antd';
import {useAppDispatch} from '../../../common/hooks';
import {getPostsByBlogId} from '../../posts/posts-reducer';
import {getBlogById} from '../blogs-reducer';
import {Image} from '../../../components/image/Image';
import {PostItem} from '../../posts/postItem/PostItem';
import {formattedDate} from '../../../common/utils/dateConvertor';
import {Title} from '../../../components/title/Title';
import {getBlogByIdSelector, getPostsSelector} from '../../../common/selectors/selectors';
import {useSelector} from 'react-redux';


const MAX_DESCRIPTION_LENGTH = 200;

export const BlogPage = () => {
    const {blogId} = useParams();
    const dispatch = useAppDispatch();
    const blog = useSelector(getBlogByIdSelector);
    // const posts = useAppSelector(state => state.postsPage.posts);
    const posts = useSelector(getPostsSelector);


    // @ts-ignore
    const {isShowMoreAsked, setIsShowMoreAsked} = useState(false);

    useEffect(() => {
        if (blogId) {
            dispatch(getBlogById(blogId));
            dispatch(getPostsByBlogId(blogId));
        }
    }, [])

    return (
        blog
            ?
            <div>
                <Title title={'Blogs'} breadcrumbs={[{breadcrumbItem: blog.name}]}/>
                <div>
                    <Image alt={'main blogPage image'}/>
                </div>

                <div>
                    <>
                        <h3>{blog.name}</h3>
                        <span>{formattedDate(blog.createdAt)}</span>
                        <span>Website: </span> <a href={blog.websiteUrl}/>
                        {isShowMoreAsked || blog.description.length <= MAX_DESCRIPTION_LENGTH ?
                            <p>{blog.description}</p> :
                            <div>
                                <p>{blog.description.slice(1, MAX_DESCRIPTION_LENGTH - 1)}</p>
                                <Button onClick={() => {
                                    setIsShowMoreAsked(true)
                                }}>Show more</Button>
                            </div>
                        }
                    </>
                </div>
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
            : <div>

            </div>
    );
};

