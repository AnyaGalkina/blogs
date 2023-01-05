import React from 'react';
import {
    BoldOutlined, DownOutlined, EditFilled,
    ItalicOutlined, LinkOutlined,
    OrderedListOutlined, PictureOutlined, PlaySquareOutlined, QuestionCircleOutlined,
    StrikethroughOutlined,
    UnorderedListOutlined
} from '@ant-design/icons';
import {Flex} from '../../../../../components/styled/Flex';

export const EditPanel = () => {
    return (
        <Flex justify={'start'}>
            <div>
                <span>H1</span>
                <span>H2</span>
                <BoldOutlined/>
                <ItalicOutlined/>
                <StrikethroughOutlined/>
                {/*???*/}
                <UnorderedListOutlined/>
                <OrderedListOutlined/>
                <EditFilled/>
                <DownOutlined/>
            </div>
            <div>
                <LinkOutlined/>
                <PictureOutlined/>
                <PlaySquareOutlined/>
                {/*<FileImageOutlined/>*/}
                {/*<PlayCircleOutlined/>*/}
            </div>

            <div>
                {/*???*/}
                <QuestionCircleOutlined/>
            </div>

        </Flex>
    );
};
