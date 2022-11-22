import {useAppSelector} from '../hooks';
import {AppRootStateType} from '../../app/store';
import {BlogType} from '../../features/blogs/blogs-api';

export const getBlogsSelector = (state: AppRootStateType): Array<BlogType>=> state.blogsPage.blogs;