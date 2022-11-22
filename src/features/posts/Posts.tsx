import React, {useEffect} from 'react';
import {Title} from '../../components/title/Title';
import {PostItem} from './PostItem/PostItem';
import {Item} from '../../components/ListItem/Item';
import {useAppDispatch} from '../../common/hooks';
import {Divider} from '@mui/material';


export type PostItemType = {
    id: string;
    title: string;
    shortDescription: string;
    content: string;
    blogId: string;
    blogName: string;
    createdAt: string;
}


export const Posts = () => {
    const dispatch = useAppDispatch();


    useEffect(() => {

    },[dispatch])


    return (
        <div>
            <Title title={"Blogs"}/>
            {/*<div>*/}
            {/*    <Filters />*/}
            {/*</div>*/}
            {posts.map((post: PostItemType) => {
                // return(
                    // <div key={post.id}>
                    //     <Item  title={}/>
                    //     <Divider />
                    // <div/>
                    // <PostItem key={post.id} post={post} />
                // )
            })}
        </div>
    );
};
