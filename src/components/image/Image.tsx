import React from 'react';

type PropsType = {
    alt: string;
    src?: string;
    styleImage?: string;
    defaultImage?: string;
}

export const Image = ({alt, src, defaultImage, styleImage}: PropsType) => {
    return (
        <img className={styleImage} alt={alt} src={src ? src : defaultImage}/>
    );
};
