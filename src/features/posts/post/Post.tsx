import React from 'react';
import {PostItemType} from '../Posts';

type PropsType = {
    post: PostItemType
}

export const Post = ({post}: PropsType) => {
    const {title, createdAt, blogId, blogName, id, shortDescription} = post;

    return (
        <div>
            <button>Back to Posts</button>
            <div>
                <img/>
                <h6>{blogName}</h6>
            </div>
            <div>
                {/*{isPublic &&*/}
                    <h3>{title}</h3>
                    <span>{createdAt}</span>
                    <img />
                    <section>{shortDescription}</section>
                {/*}*/}
            </div>
        </div>
    );
};
