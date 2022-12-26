import React from 'react';
import {CommentType} from '../../../posts-api';
import {Image} from '../../../../../components/image/Image';
import {Flex} from '../../../../../components/styled/Flex';
import {StyledGreyText} from '../../../../../components/styled/StyledGreyText';
import {formattedDate} from '../../../../../common/utils/dateConvertor';

export const Comment = ({comment}: { comment: CommentType }) => {
    const {content, createdAt, userLogin, userId} = comment;

    return (
        <div>
            <div>
                <Image
                    width={'50px'}
                    // margin={} radius={}
                    height={'50px'}
                    alt="blog image"
                />
            </div>
            <Flex justify={'start'}>
                <div>
                    <h3>{userLogin}</h3>
                    <StyledGreyText>{formattedDate(createdAt)}</StyledGreyText>
                </div>
                <div>{content}</div>
            </Flex>
            {/*<Item id={userId}  title={userLogin} createdAt={createdAt} description={content}/>*/}
        </div>
    );
};
