import React, {useCallback, useEffect} from 'react';
import {Title} from '../../components/title/Title';
import {useSelector} from 'react-redux';
import {useAppDispatch} from '../../common/hooks';
import {getBlogs, setBlogsPageSize, setFilter} from './blogs-reducer';
import {
    getBlogsSelector, getBlogsSortDirectionSelector,
    getBlogsSortedBySelector, getBlogsPageSizeSelector, getSearchNameTermSelector, getBlogsPageSelector,
} from '../../common/selectors/selectors';
import {useNavigate} from 'react-router-dom';
import {PATH} from '../../common/enums/path';
import {getIsAdmin} from '../admin/admin-selectors';
import {BlogItem} from './blogItem/BlogItem';
import {AdminButton} from '../../components/adminButton/AdminButton';
import {Filter} from '../filters/filter/Filter';
import {Search} from '../filters/search/Search';
import {Flex} from '../../components/styled/Flex';
import {ShowMoreButton} from '../../components/buttons/showMoreButton/ShowMoreButton';



export type BlogItemType = {
    id: string
    // imgSrc: string;
    blogTitle: string;
    blogDescription: string;
    createdAt: string;
    websiteUrl: string
}

export const Blogs = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const blogs = useSelector(getBlogsSelector);
    const sortBy = useSelector(getBlogsSortedBySelector);
    const sortDirection  = useSelector(getBlogsSortDirectionSelector);
    const searchNameTerm  = useSelector(getSearchNameTermSelector);
    const isAdmin = useSelector(getIsAdmin);
    const pageSize = useSelector(getBlogsPageSizeSelector);
    const page = useSelector(getBlogsPageSelector);

    const onAddPostClick = useCallback(() => {
        navigate(PATH.ADD_BLOG);
    },[]);

    const onShowMoreClick = () => {
        dispatch(setBlogsPageSize());
    }

    useEffect(() => {
        dispatch(getBlogs());
    }, [sortBy, sortDirection, searchNameTerm, pageSize, page]);

    return (
        <div>
            <Title title={'Blogs'}/>

            <div>
                {isAdmin
                    ?
                    <Flex justify={'right'} margin={'32px 0px'}>
                        <AdminButton title={"Add Blog"} onClickHandler={onAddPostClick}/>
                     </Flex>
                    : <Flex justify={'space-between'} margin={'32px 0px'}>
                            <Search />
                            <Filter isBlog={true} setFilter={setFilter}/>
                    </Flex>
                }
            </div>

            <div>
                {blogs.map(({id, name, description, websiteUrl}) => {
                        return (
                            <BlogItem key={id}
                                      title={name}
                                      description={description}
                                      id={id}
                                      websiteUrl={websiteUrl}
                            />
                        )
                    }
                )}
            </div>

            <ShowMoreButton onClickHandler={onShowMoreClick}/>
        </div>
    );
};
