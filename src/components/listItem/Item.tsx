import React, {memo} from 'react';
import {Image} from '../image/Image';
import {useSelector} from 'react-redux';
import {getIsAdmin} from '../../features/admin/admin-selectors';
import {NavLink} from 'react-router-dom';
import style from './Item.module.css';
import {Flex} from '../styled/Flex';
import {DropdownMenu} from './dropdownMenu/DropdownMenu';

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


export const Item = memo(({
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

    const showDroppedMenu = isAdmin && onEditClick && onDeleteClick;

    const onItemClick = () => {
        if (onClick) {
            onClick(id);
        }
    }

    return (
        <>
            <NavLink className={style.link} to={path}>
                <div onClick={onItemClick}>

                    <Flex justify={justifyBlock} wrap={wrapBlock} align={alignBlock} margin={marginBlock}>
                        <Image width={imgWidth}
                            // margin={} radius={}
                               height={imgHeight}
                               alt="blog image"
                        />
                        <Flex margin={'5px'} direction={'column'} align={'start'}>
                            <h3>{title}</h3>

                            {
                                websiteUrl
                                    ? <div>
                                        <span>Website: <a href={websiteUrl}>{websiteUrl}</a></span>
                                    </div>
                                    : <span></span>
                            }

                            <p>{description}</p>
                            <span>{createdAt && createdAt}</span>
                        </Flex>

                    </Flex>
                </div>

            </NavLink>

            {showDroppedMenu
                ? <DropdownMenu onDeleteClick={onDeleteClick} onEditClick={onEditClick}/>
                : ''
            }
        </>
    );
});
