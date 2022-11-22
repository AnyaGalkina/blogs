import React from 'react';
import './App.css';
import {Blogs} from './features/blogs/Blogs';
import {Navigate, Route, Routes} from 'react-router-dom';
import {PATH} from './common/enums/path';
import {PageNotFound} from './components/pageNotFound';
import { Posts } from './features/posts/Posts';

function App() {
    return (
        <div className="App">
            {/*<Header />*/}
            {/*{appStatus === 'loading' && <LinearProgress />}*/}
            {/*<ErrorSnackbars />*/}
            <Routes>
                <Route path="/" element={<Navigate to={PATH.BLOGS}/>}/>
                <Route path={PATH.BLOGS} element={<Blogs />}/>
                <Route path={PATH.POSTS} element={<Posts />}/>
                <Route path={PATH.PAGE_NOT_FOUND} element={<PageNotFound />}/>
                <Route path="*" element={<Navigate to={PATH.PAGE_NOT_FOUND}/>}/>
            </Routes>
        </div>
    );
}

export default App;
