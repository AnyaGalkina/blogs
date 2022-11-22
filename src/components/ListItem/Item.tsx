import React from 'react';
import defaultImage from '../../assets/images/defaultImage.png';

type PropsType = {
    title: string;
    description: string;
    websiteUrl?: string;
    createdAt?: string;
    imgSrc?: string;
    styleBlock?: string;
    styleImg?: string;
    styleText?: string;
    // id: string;
}

export const Item = ({title, description, websiteUrl, imgSrc, createdAt, styleBlock, styleImg, styleText}: PropsType) => {
    return (
        <div className={styleBlock}>
            {/*<img src={imgSrc ? imgSrc : defaultImage} alt="blog image"/>*/}
            <img className={styleImg} src={defaultImage} alt="blog image"/>

            <div className={styleText}>
                <h3>{title}</h3>

                {websiteUrl && <div>
                    <span>Website: </span> <a href={websiteUrl}/>
                </div>}

                <p>{description}</p>
                <span>{createdAt && createdAt}</span>
            </div>

        </div>
    );
};
