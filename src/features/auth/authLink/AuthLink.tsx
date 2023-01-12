import React from 'react';
import {StyledGreyText} from '../../../components/styled/StyledGreyText';
import {NavLink} from 'react-router-dom';
import {Flex} from '../../../components/styled/Flex';

type PropsType = {
    path: string;
    text?: string;
    linkTitle: string
};

export const AuthLink = ({path, text="", linkTitle}: PropsType) => {
    return (
        <div style={{margin: "20px 0"}}>
            <Flex direction={'column'}>
                <div>
                    <StyledGreyText>{text}</StyledGreyText>
                </div>
                <div>
                    <NavLink style={{color: '#f9346b'}} to={path}>
                        <h3>{linkTitle}</h3>
                    </NavLink>
                </div>
            </Flex>
        </div>
    );
};
