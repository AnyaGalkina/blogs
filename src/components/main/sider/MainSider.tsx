import React, {useEffect, useState} from 'react';
import Sider from 'antd/es/layout/Sider';
import {GroupOutlined, UnorderedListOutlined, UserOutlined} from '@ant-design/icons';
import {NavLink} from 'react-router-dom';
import {PATH} from '../../../common/enums/path';
import styled from 'styled-components';
import {StyledSiderItem} from './styledSiderItem/StyledSiderItem';
import {Flex} from '../../styled/Flex';
import {useSelector} from 'react-redux';
import {getIsAdmin} from '../../../features/admin/admin-selectors';

export const StyledSider = styled(Sider)`
  background-color: #FCFBFB;
`

type LinkType = {
    path: string;
    title: string;
    icon: React.ReactElement;
}


const links: LinkType[] = [
    {path: PATH.BLOGS, title: 'Blogs', icon: <UnorderedListOutlined/>},
    {path: PATH.POSTS, title: 'Posts', icon: <GroupOutlined/>},
    {path: PATH.USERS, title: 'Users', icon: <UserOutlined/>},
]


export const MainSider = () => {
    const isAdmin = useSelector(getIsAdmin);
    const [linksToMap, setLinksToMap] = useState<LinkType[]>([]);

    useEffect(() => {
        isAdmin
            ? setLinksToMap(links)
            : setLinksToMap(links.slice(0, 2));
    }, [isAdmin])

    return (
        <StyledSider theme={'light'}>
            {linksToMap.map((link,index) => {
                return (
                    <StyledSiderItem key={index}>
                        <NavLink to={link.path}
                                 style={({isActive}) =>
                                     (isActive ? {color: '#f9346b'} : {color: 'black'})}>
                            <Flex>
                                <StyledSiderItem>
                                    {link.icon}
                                </StyledSiderItem>
                                <span>{link.title}</span>
                            </Flex>
                        </NavLink>
                    </StyledSiderItem>
                )
            })
            }
        </StyledSider>
    );
};
