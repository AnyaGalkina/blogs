import React, {useEffect} from 'react';
import {useAppDispatch} from '../../../common/hooks';
import {Image} from '../../../components/image/Image';
import {useNavigate, useParams} from 'react-router-dom';
import {getPostById} from '../posts-reducer';
import {useSelector} from 'react-redux';
import {getPostByIdSelector} from '../../../common/selectors/selectors';
import {PATH} from '../../../common/enums/path';
import {formattedDateWithHours} from '../../../common/utils/dateConvertor';
import {Title} from '../../../components/title/Title';
import {Flex} from '../../../components/styled/Flex';

export const PostPage = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {postId} = useParams();
    const post = useSelector(getPostByIdSelector);

    const onBackToPostsClick = () => {
        navigate(PATH.POSTS);
    }

    useEffect(() => {
        if (postId) {
            dispatch(getPostById(postId))
        }
    }, []);

    return (
        <div>
            {post
                ? <>

                    <Title title={'Posts'} breadcrumbs={[{breadcrumbItem: post.blogName}]}/>

                    <button onClick={onBackToPostsClick}>Back to Posts</button>

                    <Flex margin={"30px 0"} justify={"start"}>
                        <Image alt={'post'} width={'50px'} height={'50px'} radius={'40px'} margin={'0 20px 0 0'}/>
                        <h6>{post.blogName}</h6>
                    </Flex>
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
