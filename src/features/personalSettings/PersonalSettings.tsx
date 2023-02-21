import React, {useEffect} from 'react';
import {getAllDevices} from './personalSettings-reducer';
import {useAppDispatch} from '../../common/hooks';

export const PersonalSettings = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllDevices());
    }, []);

    return (
        <div>
            PersonalSettings
        </div>
    );
};
