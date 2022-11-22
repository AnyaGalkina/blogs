import React, {useEffect} from 'react';
import {BlogItem} from './blogItem/BlogItem';
import {Title} from '../../components/title/Title';
import {BlogType} from './blogs-api';
import {useDispatch} from 'react-redux';
import {useAppDispatch, useAppSelector} from '../../common/hooks';
import {getBlogs} from './blogs-reducer';
import {getBlogsSelector} from '../../common/selectors/selectors';
import style from './Blogs.module.css';
import {Item} from '../../components/ListItem/Item';

export type BlogItemType = {
    id: string
    // imgSrc: string;
    blogTitle: string;
    blogDescription: string;
    createdAt: string;
    websiteUrl: string
}

export const Blogs = () => {
    const dispatch = useAppDispatch();
    const blogs = useAppSelector(getBlogsSelector);


    useEffect(() => {
        dispatch(getBlogs());
    }, [])

    return (
        <div>
            <Title title={'Blogs'}/>
            {/*<div>*/}
            {/*    <Search />*/}
            {/*    <Filters />*/}
            {/*</div>*/}
            <div>
                {blogs.map(({id, createdAt, name, description, websiteUrl}) => {
                        return (
                            <Item key={id}
                                  title={name}
                                  description={description}
                                  websiteUrl={websiteUrl}
                                  styleBlock={style.blogItemContainer}
                                  styleImg={style.blogImg}
                                  styleText={style.blogText}
                            />
                        )
                    }
                )}
            </div>
            <button>Show more</button>
        </div>
    );
};
