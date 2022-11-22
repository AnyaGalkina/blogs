import React, {useEffect} from 'react';
import {Title} from '../../components/title/Title';
import {Item} from '../../components/ListItem/Item';
import {useAppDispatch} from '../../common/hooks';
import {Divider} from '@mui/material';
import {getPosts} from './posts-reducer';
import {useSelector} from 'react-redux';
import {getPostsSelector} from '../../common/selectors/selectors';
import {PostType} from './posts-api';
import style from './Posts.module.css';


// export type PostItemType = {
//     id: string;
//     title: string;
//     shortDescription: string;
//     content: string;
//     blogId: string;
//     blogName: string;
//     createdAt: string;
// }


export const Posts = () => {
    const dispatch = useAppDispatch();
    const posts = useSelector(getPostsSelector);


    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch])


    return (
        <div>
            <Title title={'Blogs'}/>
            {/*<div>*/}
            {/*    <Filters />*/}
            {/*</div>*/}
            <div className={style.postsBlock}>
                {posts.map(({id, blogId, shortDescription, title, content, createdAt, blogName}: PostType) => {
                    return (
                        <Item key={id}
                              title={title}
                              description={shortDescription}
                              createdAt={createdAt}
                              styleBlock={style.postItemContainer}
                              styleImg={style.postImg}
                              styleText={style.postText}
                        />
                    )
                })}
            </div>
            <button>Show more</button>
        </div>
    );
};
