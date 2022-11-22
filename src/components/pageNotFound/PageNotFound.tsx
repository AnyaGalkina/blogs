import React, { ReactElement } from 'react';

// import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

import iceNotFoundPage from '../../assets/image/notFoundPage.png';

import styles from './PageNotFound.module.css';

export const PageNotFound = (): ReactElement => {
    const navigate = useNavigate();

    // const onShoppingClickHandler = (): void => {
    //     navigate(PATH.);
    // };

    return (
        <div className={styles.notFoundContainer}>
            404
            {/*<img className={styles.img} alt="404" src={iceNotFoundPage} />*/}
            <div className={styles.button}>
                {/*<Button*/}
                {/*    style={{ color: '#fff' }}*/}
                {/*    variant="contained"*/}
                {/*    onClick={onShoppingClickHandler}*/}
                {/*>*/}
                {/*    Go to shopping*/}
                {/*</Button>*/}
            </div>
        </div>
    );
};
