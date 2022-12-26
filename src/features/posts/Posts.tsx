import React, {useCallback, useEffect, useState} from 'react';
import {Title} from '../../components/title/Title';
import {useAppDispatch} from '../../common/hooks';
import {getPosts, setPostsFilter, setPostsPageSize} from './posts-reducer';
import {useSelector} from 'react-redux';
import {
    getPostsPageSizeSelector,
    getPostsSelector,
    getPostsSortDirectionSelector,
    getPostsSortedBySelector
} from '../../common/selectors/selectors';
import {PostType} from './posts-api';
import {getIsAdmin} from '../admin/admin-selectors';
import {PostItem} from './postItem/PostItem';
import {AdminButton} from '../../components/buttons/adminButton/AdminButton';
import {BasicModal} from '../../components/basicModal/BasicModal';
import {AddPost} from '../admin/posts/addPost/AddPost';
import {formattedDate} from '../../common/utils/dateConvertor';
import {PostReqType} from '../admin/admin-api';
import {addPost} from '../admin/admin-reducer';
import {Filter} from '../filters/filter/Filter';
import {Flex} from '../../components/styled/Flex';
import {ShowMoreButton} from '../../components/buttons/showMoreButton/ShowMoreButton';
import {DivWithMargin} from '../../components/styled/StyledWithMargin';


export const Posts = () => {
    const dispatch = useAppDispatch();
    const posts = useSelector(getPostsSelector);
    const isAdmin = useSelector(getIsAdmin);
    const sortBy = useSelector(getPostsSortedBySelector);
    const sortDirection = useSelector(getPostsSortDirectionSelector);
    const pageSize = useSelector(getPostsPageSizeSelector);

    const [isModalOpen, setIsModalOpen] = useState(false);


    const onAddPostClick = useCallback(() => {
        setIsModalOpen(true);
    }, [])


    const onPublishClickHandler = useCallback((newPost: PostReqType) => {
        dispatch(addPost(newPost));
        setIsModalOpen(false);
    }, [])

    const onCancelClickHandler = () => {
        setIsModalOpen(false);
    }

    const onShowMoreClick = () => {
        dispatch(setPostsPageSize());
    }

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch, sortBy, sortDirection, pageSize])


    return (
        <>
            <div>
                <Title title={'Posts'}/>
                <div>
                    {isAdmin
                        ? <Flex justify={'right'} margin={'32px 0px'}>
                            <AdminButton title={'Add Post'} onClickHandler={onAddPostClick}/>
                        </Flex>
                        :
                        <Flex justify={'end'} margin={'32px 0px'}>
                            <Filter
                                //@ts-ignore
                                setFilter={setPostsFilter}
                            />
                        </Flex>
                    }
                </div>
                <Flex wrap={'wrap'}>
                    {posts.map(({id, blogId, title, createdAt, blogName}: PostType) => {
                        return (
                            <DivWithMargin margin={"0 30 0 0"} key={id}>
                                <PostItem
                                    // key={id}
                                          id={id}
                                          title={title}
                                          description={blogName}
                                          createdAt={formattedDate(createdAt)}
                                          blogId={blogId}
                                />
                            </DivWithMargin>
                        )
                    })}
                </Flex>

                <ShowMoreButton onClickHandler={onShowMoreClick}/>

            </div>
            <BasicModal isModalOpen={isModalOpen}
                        modalTitle={'Add Post'}
                        modalContent={''}
                        handleCancel={onCancelClickHandler}>
                <AddPost onPublishClickHandler={onPublishClickHandler}/>
            </BasicModal>

        </>

    );
};
