import React, {useCallback, useEffect, useState} from 'react';
import {Title} from '../../components/title/Title';
import {Item} from '../../components/listItem/Item';
import {useAppDispatch} from '../../common/hooks';
import {getPosts} from './posts-reducer';
import {useSelector} from 'react-redux';
import {getPostsSelector} from '../../common/selectors/selectors';
import {PostType} from './posts-api';
import style from './Posts.module.css';
import {getIsAdmin} from '../admin/admin-selectors';
import {Button} from 'antd';
import {DownOutlined} from '@ant-design/icons';
import {PostItem} from './postItem/PostItem';
import {AdminButton} from '../../components/adminButton/AdminButton';
import {BasicModal} from '../../components/basicModal/BasicModal';
import {useNavigate} from 'react-router-dom';
import {PATH} from '../../common/enums/path';


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
    const navigate = useNavigate();
    const [] = useState(false);
    const posts = useSelector(getPostsSelector);
    const isAdmin = useSelector(getIsAdmin);

    const onAddPostClick = useCallback(() => {
        navigate(PATH.ADD_POST);
    }, [])


    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch])


    return (
        <>
            <div>
                <Title title={'Posts'}/>
                <div>
                    {isAdmin ? <AdminButton title={"Add Post"} onClickHandler={onAddPostClick}/>: ''
                        // <Filters />
                    }
                </div>
                <div className={style.postsBlock}>
                    {posts.map(({id, blogId, shortDescription, title, content, createdAt, blogName}: PostType) => {
                        return (
                            <PostItem key={id} id={id} title={title} description={blogName} createdAt={createdAt}/>
                        )
                    })}
                </div>
                <div className={style.showMoreBtn}>
                    <Button>Show more <DownOutlined/></Button>
                </div>
            </div>
            {/*<BasicModal isModalOpen={} modalTitle={} modalContent={} />*/}
        </>

    );
};
