import React from 'react';
import {Image} from '../image/Image';
import {useSelector} from 'react-redux';
import {getIsAdmin} from '../../features/admin/admin-selectors';
import {DeleteOutlined, EditOutlined, MoreOutlined} from '@ant-design/icons';
import {Dropdown, MenuProps} from 'antd';
import {NavLink} from 'react-router-dom';
import style from './Item.module.css';
import {Flex} from '../styled/Flex';

type PropsType = {
    title: string;
    description: string;
    websiteUrl?: string;
    createdAt?: string;
    imgSrc?: string;
    styleText?: string;
    onClick?: (id: string) => void;
    id: string;
    onEditClick?: (event: any) => void;
    onDeleteClick?: (event: any) => void;
    path: string;

    justifyBlock?: string;
    wrapBlock?: string;
    marginBlock?: string;
    alignBlock?: string;
    imgWidth?: string;
    imgHeight?: string;
    // styleImage?: strimg;

}


export const Item = ({
                         onClick,
                         id, imgHeight, imgWidth,
                         title,
                         description,
                         websiteUrl,
                         imgSrc,
                         createdAt,
                         styleText,
                         onEditClick,
                         onDeleteClick,
                         path,
                         justifyBlock,
                         wrapBlock,
                         marginBlock,
                         alignBlock
                     }: PropsType) => {
    const isAdmin = useSelector(getIsAdmin);

    const onItemClick = () => {
        if (onClick) {
            onClick(id);
        }
    }

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <span onClick={onDeleteClick}>
                    <DeleteOutlined/> Delete
                </span>
            ),
        },
        {
            key: '2',
            label: (
                <span onClick={onEditClick}>
                    <EditOutlined/> Edit
                </span>
            ),
        }
    ]


    return (
        // <Flex className={styleContainer}>
        <>
            <NavLink className={style.link} to={path}>
                <div onClick={onItemClick}>

                    <Flex justify={justifyBlock} wrap={wrapBlock} align={alignBlock} margin={marginBlock}>
                        <Image
                            width={imgWidth}
                            // margin={} radius={}
                            height={imgHeight}
                            alt="blog image"/>

                        <div className={styleText}>
                            <h3>{title}</h3>

                            {websiteUrl && <div>
                                <span>Website: <a href={websiteUrl}>{websiteUrl}</a></span>
                            </div>}

                            <p>{description}</p>
                            <span>{createdAt && createdAt}</span>
                        </div>
                    </Flex>
                </div>

            </NavLink>

            {isAdmin
                ? <div style={{width: '50px', textAlign: 'center'}}>
                    <Dropdown menu={{items}} placement="bottomRight">
                        <MoreOutlined/>
                    </Dropdown>
                </div>

                : ''
            }
        </>
        // </Flex>
    );
};
