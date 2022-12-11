import React from 'react';
import defaultImage from '../../assets/images/defaultImage.png';
import {Image} from '../image/Image';
import {useSelector} from 'react-redux';
import {getIsAdmin} from '../../features/admin/admin-selectors';
import {EditOutlined, MoreOutlined, DeleteOutlined} from '@ant-design/icons';
import {Dropdown, MenuProps} from 'antd';
import {NavLink} from 'react-router-dom';
import style from './Item.module.css';

type PropsType = {
    title: string;
    description: string;
    websiteUrl?: string;
    createdAt?: string;
    imgSrc?: string;
    styleBlock?: string;
    styleImg?: string;
    styleText?: string;
    onClick?: (id: string) => void;
    id: string;
    onEditClick?: (event: any) => void;
    onDeleteClick?: (event: any) => void;
    styleContainer?: string;
    path: string;
}

export const Item = ({
                         onClick,
                         id,
                         title,
                         description,
                         websiteUrl,
                         imgSrc,
                         createdAt,
                         styleBlock,
                         styleImg,
                         styleText,
                         onEditClick,
                         onDeleteClick,
                         styleContainer,
                         path,
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
        <div className={styleContainer}>
            <NavLink className={style.link} to={path}>
                <div className={styleBlock} onClick={onItemClick}>
                    <Image styleImage={styleImg} alt="blog image"/>

                    <div className={styleText}>
                        <h3>{title}</h3>

                        {websiteUrl && <div>
                            <span>Website: <a href={websiteUrl}>{websiteUrl}</a></span>
                        </div>}

                        <p>{description}</p>
                        <span>{createdAt && createdAt}</span>
                    </div>
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

        </div>
    );
};
