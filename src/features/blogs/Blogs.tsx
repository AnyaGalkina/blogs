import React, {useCallback, useEffect} from 'react';
import {Title} from '../../components/title/Title';
import {useSelector} from 'react-redux';
import {useAppDispatch} from '../../common/hooks';
import {getBlogs, setFilter} from './blogs-reducer';
import {
    getBlogsSelector, getBlogsSortDirectionSelector,
    getBlogsSortedBySelector,
} from '../../common/selectors/selectors';
import style from './Blogs.module.css';
import {useNavigate} from 'react-router-dom';
import {PATH} from '../../common/enums/path';
import {getIsAdmin} from '../admin/admin-selectors';
import {Button} from 'antd';
import {DownOutlined} from '@ant-design/icons';
import {BlogItem} from './blogItem/BlogItem';
import {AdminButton} from '../../components/adminButton/AdminButton';
import {Filter} from '../filters/filter/Filter';

export type BlogItemType = {
    id: string
    // imgSrc: string;
    blogTitle: string;
    blogDescription: string;
    createdAt: string;
    websiteUrl: string
}

export const Blogs = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const blogs = useSelector(getBlogsSelector);
    const sortBy = useSelector(getBlogsSortedBySelector);
    const sortDirection  = useSelector(getBlogsSortDirectionSelector);
    const isAdmin = useSelector(getIsAdmin);

    const onAddPostClick = useCallback(() => {
        navigate(PATH.ADD_BLOG);
    },[]);

    // const onShowMoreClick = () => {
    //
    // }

    useEffect(() => {
        debugger
        // console.log("sortDirection", sortDirection, "sortBy", sortBy)
        dispatch(getBlogs());
    }, [sortBy, sortDirection]);

    return (
        <div>
            <Title title={'Blogs'}/>

            <div>
                {isAdmin
                    ?
                    <div className={style.addBlogBtnBlock}>
                        <AdminButton title={"Add Blog"} onClickHandler={onAddPostClick}/>
                     </div>
                    : <div>
                        {/*    <Search />*/}
                            <Filter isBlog={true} setFilter={setFilter}/>
                    </div>
                }
            </div>

            <div>
                {blogs.map(({id, name, description, websiteUrl}) => {
                        return (
                            <BlogItem key={id}
                                      title={name}
                                      description={description}
                                      id={id}
                                      websiteUrl={websiteUrl}
                            />
                        )
                    }
                )}
            </div>

            <div className={style.showMoreBtn}>
                <Button>Show more <DownOutlined/></Button>
            </div>
        </div>
    );
};
