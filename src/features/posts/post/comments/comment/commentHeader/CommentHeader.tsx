import React from 'react';
import {Flex} from '../../../../../../components/styled/Flex';
import {Image} from '../../../../../../components/image/Image';
import {StyledGreyText} from '../../../../../../components/styled/StyledGreyText';
import {formattedDate} from '../../../../../../common/utils/dateConvertor';

type PropsType = {
    userLogin: string;
    createdAt: string;
}

export const CommentHeader = ({createdAt, userLogin}: PropsType) => {
    return (
        <Flex justify={'start'} align={'center'}>
            <Image
                width={'25px'}
                // margin={} radius={}
                height={'25px'}
                alt="blog image"
            />
            <h3 style={{margin: '0px 10px'}}>{userLogin}</h3>
            <div style={{margin: '0px 10px'}}>
                <StyledGreyText>{formattedDate(createdAt)}</StyledGreyText>
            </div>

        </Flex>
    );
};
