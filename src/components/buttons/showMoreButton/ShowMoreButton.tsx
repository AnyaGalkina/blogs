import React from 'react';
import {Flex} from '../../styled/Flex';
import {Button} from 'antd';
import {DownOutlined} from '@ant-design/icons';


type PropsType = {
    onClickHandler: () => void;
}

export const ShowMoreButton = ({onClickHandler}: PropsType) => {
    return (
        <Flex margin={'30px'}>
            <Button onClick={onClickHandler}>
                Show more
                <DownOutlined/>
            </Button>
        </Flex>
    );
};
