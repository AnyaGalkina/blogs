import React from 'react';
import defaultBlogImage from '../../assets/images/defaultImage.png';

type PropsType = {
    alt: string;
    src?: string;
    styleImage?: string;
    defaultImage?: string;
}

export const Image = ({alt, src, defaultImage, styleImage}: PropsType) => {
    return (
        <img className={styleImage} alt={alt} src={src ? src : defaultImage ? defaultImage : defaultBlogImage}/>
    );
};
