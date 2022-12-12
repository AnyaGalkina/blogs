import React, {useEffect} from 'react';
import {useAppDispatch} from '../../../common/hooks';
import {Image} from '../../../components/image/Image';
import style from './PostPage.module.css';
import {useNavigate, useParams} from 'react-router-dom';
import {getPostById} from '../posts-reducer';
import {useSelector} from 'react-redux';
import {getPostByIdSelector} from '../../../common/selectors/selectors';
import {PATH} from '../../../common/enums/path';
import {formattedDateWithHours} from '../../../common/utils/dateConvertor';
import {Title} from '../../../components/title/Title';

export const PostPage = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {postId} = useParams();
    const post = useSelector(getPostByIdSelector);

    const onBackToPostsClick = () => {
        navigate(PATH.POSTS);
    }

    useEffect(() => {
        debugger
        if (postId) {
            // @ts-ignore
            dispatch(getPostById(postId))
        }
    }, []);

    return (
        <div>
            {post
                ? <>

                    <Title title={'Posts'} breadcrumbs={[{breadcrumbItem: post.blogName}]}/>

                    <button onClick={onBackToPostsClick}>Back to Posts</button>

                    <div className={style.blogInfo}>
                        <Image alt={'post'} styleImage={style.blogImage}/>
                        <h6>{post.blogName}</h6>
                    </div>
                    <div>
                        <h3>{post.title}</h3>
                        <span>{formattedDateWithHours(post.createdAt)}</span>
                        <Image alt={'post'}/>
                        <section>{post.content}</section>
                    </div>

                </>
                : ''
            }
        </div>

    );
};
