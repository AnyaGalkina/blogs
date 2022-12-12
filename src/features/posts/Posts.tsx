import React, {useCallback, useEffect, useState} from 'react';
import {Title} from '../../components/title/Title';
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
import {AddPost} from '../admin/posts/addPost/AddPost';
import {formattedDate} from '../../common/utils/dateConvertor';
import {PostReqType} from '../admin/admin-api';
import {addPost} from '../admin/admin-reducer';


export const Posts = () => {
    const dispatch = useAppDispatch();
    const posts = useSelector(getPostsSelector);
    const isAdmin = useSelector(getIsAdmin);
    const [isModalOpen, setIsModalOpen] = useState(false);


    const onAddPostClick = useCallback(() => {
        setIsModalOpen(true);
    }, [])


    const onPublishClickHandler =  useCallback((newPost: PostReqType) => {
        dispatch(addPost(newPost));
        setIsModalOpen(false);
    }, [])

    const onCancelClickHandler = () => {
        setIsModalOpen(false);
    }

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
                            <PostItem key={id} id={id} title={title} description={blogName} createdAt={formattedDate(createdAt)} blogId={blogId}/>
                        )
                    })}
                </div>
                <div className={style.showMoreBtn}>
                    <Button>Show more <DownOutlined/></Button>
                </div>
            </div>
            <BasicModal isModalOpen={isModalOpen} modalTitle={"Add Post"} modalContent={""} handleCancel={onCancelClickHandler}>
                <AddPost onPublishClickHandler={onPublishClickHandler}/>
            </BasicModal>

        </>

    );
};
