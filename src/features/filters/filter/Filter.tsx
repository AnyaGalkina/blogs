import React, {ChangeEvent, useEffect} from 'react';
import style from '../../admin/posts/postForm/PostForm.module.css';
import {useAppDispatch} from '../../../common/hooks';
import { BlogsSortDirectionType } from '../../blogs/blogs-reducer';
import {PostsSortDirectionType, SortByType} from '../../posts/posts-reducer';

type FiltersType = 'new' | 'old' | 'startFromA' | 'startFromZ' | '';
// type FiltersType = BlogsSortDirectionType | '';

type ParamsSetFilterType = { sortDirection: BlogsSortDirectionType | PostsSortDirectionType, sortBy: SortByType };

type PropsType = {
    isBlog?: boolean;
    setFilter: ( params: ParamsSetFilterType ) => void;
}

export const Filter = ({isBlog = false, setFilter}: PropsType) => {
    const [selectedOption, setSelectedOption] = React.useState<FiltersType>('');

    const dispatch = useAppDispatch();

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        debugger
        // @ts-ignore
        let newValue: FiltersType = event.target.value;
        console.log(newValue)
        setSelectedOption(newValue);
    }


    useEffect(() => {
        debugger
        if (selectedOption === 'new') {
            dispatch(setFilter({sortDirection: 'desc', sortBy: 'createdAt'}));
        }
        if (selectedOption === 'old') {
            dispatch(setFilter({sortDirection: 'asc', sortBy: 'createdAt'}));
        }
        if (selectedOption === 'startFromA') {
            dispatch(setFilter({sortDirection: 'desc', sortBy: 'name'}));
        }
        if (selectedOption === 'startFromZ') {
            dispatch(setFilter({sortDirection: 'asc', sortBy: 'name'}));
        }

    }, [selectedOption]);

    return (
        <div>
            <select value={selectedOption}
                    onChange={handleChange}
                    className={style.select}
            >
                <option value={'new'}>New first</option>
                <option value={'old'}>Old first</option>
                {isBlog && <option value={'startFromA'}>From A to Z</option>}
                {isBlog && <option value={'startFromZ'}>From Z to A</option>}
            </select>
        </div>
    );
};
