import React, {useEffect, useState} from 'react';
import defaultImage from '../../../assets/images/defaultImage.png'
import {useNavigate, useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {Button, Divider} from 'antd';
import {Item} from '../../../components/listItem/Item';
import {useAppDispatch, useAppSelector} from '../../../common/hooks';
import {getPostsByBlogId} from '../../posts/posts-reducer';
import {getBlogById} from '../blogs-reducer';
import {getIsAdmin} from '../../admin/admin-selectors';
import {Image} from '../../../components/image/Image';
import {PostItem} from '../../posts/postItem/PostItem';
import {AdminButton} from '../../../components/adminButton/AdminButton';

// type PropsType = {
//     'title': 'string',
//     'shortDescription': 'string',
//     'content': 'string',
//     'blogId': 'string',
//     'blogName': 'string',
//     // "pagesCount": 0,
//     // "page": 0,
//     // "pageSize": 0,
//     // "totalCount": 0,
//     'items': [
//         {
//             'id': 'string',
//             'title': 'string',
//             'shortDescription': 'string',
//             'content': 'string',
//             'blogId': 'string',
//             'blogName': 'string',
//             'createdAt': '2022-11-23T07:43:24.396Z'
//         }
//     ]
// }



export const BlogPage = () => {
    const {blogId} = useParams();
    const dispatch = useAppDispatch();
    const blog = useAppSelector(state => state.blogsPage.blogs[0]);
    const posts = useAppSelector(state => state.postsPage.posts);



    // @ts-ignore
    const {isShowMoreAsked, setIsShowMoreAsked} = useState(false);

    useEffect(() => {
        if (blogId) {
            dispatch(getBlogById(blogId));
            dispatch(getPostsByBlogId(blogId));
        }
    }, [])

    return (
        <div>
            <div>
                <Image alt={'main blogPage image'}/>
            </div>
            <div>
                {blog
                    ?
                    <>
                        <h3>{blog.name}</h3>
                        <span>{blog.createdAt}</span>
                        <span>Website: </span> <a href={blog.websiteUrl}/>
                        {isShowMoreAsked || blog.description.length <= 200 ? <p>{blog.description}</p> :
                            <div>
                                <p>{blog.description.slice(1, 199)}</p>
                                <Button onClick={() => {
                                    setIsShowMoreAsked(true)
                                }}>Show more</Button>
                            </div>
                        }
                    </>
                    : ""
                }
            </div>
            <Divider/>

            <div>
                {posts
                    ? posts.map(post => {
                        return <PostItem key={post.id}
                                     title={post.title}
                                     description={post.shortDescription}
                                     id={post.id}
                                     createdAt={post.createdAt}
                        />
                    })
                    : ''
                }

            </div>
        </div>
    );
};

