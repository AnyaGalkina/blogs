import React, {useState} from 'react';
import {formattedDate} from '../../../../common/utils/dateConvertor';
import {Button} from 'antd';

type PropsType = {
    blogName: string;
    createdAt: string;
    websiteUrl: string;
    description: string;
}

const MAX_DESCRIPTION_LENGTH = 200;

export const BlogInfo = ({blogName, createdAt, websiteUrl, description}: PropsType) => {
    const [isShowMoreAsked, setIsShowMoreAsked] = useState(false);

    const onShowMoreClick = () => {
        setIsShowMoreAsked(true)
    }

    return (
        <div>
            <>
                <h3>{blogName}</h3>
                <span>{formattedDate(createdAt)}</span>
                <span>Website: </span> <a href={websiteUrl}/>

                {isShowMoreAsked || description.length <= MAX_DESCRIPTION_LENGTH ?
                    <p>{description}</p> :
                    <div>
                        <p>{description.slice(1, MAX_DESCRIPTION_LENGTH - 1)}</p>
                        <Button onClick={onShowMoreClick}>Show more</Button>
                    </div>
                }
            </>
        </div>
    );
};
