import React, {useEffect} from 'react';
import {Title} from '../../components/title/Title';
import {useSelector} from 'react-redux';
import {useAppDispatch} from '../../common/hooks';
import {getBlogs} from './blogs-reducer';
import {getBlogsSelector} from '../../common/selectors/selectors';
import style from './Blogs.module.css';
import {useNavigate} from 'react-router-dom';
import {PATH} from '../../common/enums/path';
import {getIsAdmin} from '../admin/admin-selectors';
import {Button} from 'antd';
import {DownOutlined} from '@ant-design/icons';
import {BlogItem} from './blogItem/BlogItem';

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
    const isAdmin = useSelector(getIsAdmin);

    const onAddPostClick = () => {
        navigate(PATH.ADD_BLOG);
    }

    // const onShowMoreClick = () => {
    //
    // }

    useEffect(() => {
        dispatch(getBlogs());
    }, [])


    return (
        <div>
            <Title title={'Blogs'}/>

            <div>
                {isAdmin
                    ?
                    <div className={style.addBlogBtnBlock}>
                        <Button className={style.addBlogBtn} onClick={onAddPostClick}>
                            Add Blog
                        </Button>
                     </div>
                    : <div>
                        {/*    <Search />*/}
                        {/*    <Filters />*/}
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
