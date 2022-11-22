import React from 'react';
import {BlogItemType} from '../Blogs';
import defaultImage from '../../../assets/images/defaultImage.png'
import {PATH} from '../../../common/enums/path';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {getBatch} from 'react-redux/es/utils/batch';
import {BlogType} from '../blog-api';

type PropsType = {
    blog: BlogType
}

export const Blog = ({blog}: PropsType) => {
    const navigate =  useNavigate();

    const { name, websiteUrl, description, id} = blog;

    const onBlogClick = () => {
        // dispatch(getBlogs)
        // navigate(PATH.BLOGS + `${blogId}` + PATH.POSTS)
    }

    return (
        <div onClick={onBlogClick}>
            {/*<img src={imgSrc ? imgSrc : defaultImage} alt="blog image"/>*/}
            <img src={defaultImage} alt="blog image"/>
            <div>
                <h3>{name}</h3>
                <span>Website: </span> <a href={websiteUrl}/>
                <p>{description}</p>
            </div>
        </div>
    );
};

