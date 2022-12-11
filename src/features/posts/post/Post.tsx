import React, {useEffect} from 'react';
import {useAppDispatch} from '../../../common/hooks';
import {Image} from '../../../components/image/Image';
import style from './Post.module.css';
import {useNavigate, useParams} from 'react-router-dom';
import {getPostById} from '../posts-reducer';
import {useSelector} from 'react-redux';
import {getPostByIdSelector} from '../../../common/selectors/selectors';
import { PATH } from '../../../common/enums/path';

export const Post = () => {
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
            <button onClick={onBackToPostsClick}>Back to Posts</button>
            {post
                ?
                <>
                    <div className={style.blogInfo}>
                        <Image alt={"post"}  styleImage={style.blogImage}/>
                        <h6>{post.blogName}</h6>
                    </div>
                    <div>
                        <h3>{post.title}</h3>
                        <span>{post.createdAt}</span>
                        <Image alt={'post'}/>
                        <section>{post.content}</section>
                    </div>

                </>
                : ''
            }
        </div>
    );
};
