import React from 'react';
import './App.css';
import {Link, Navigate, Route, Routes} from 'react-router-dom';
import {Blogs} from '../features/blogs/Blogs';
import {Posts} from '../features/posts/Posts';
import {PageNotFound} from '../components/pageNotFound';
import {PATH} from '../common/enums/path';
import {LinearProgress} from '@mui/material';
import {useSelector} from 'react-redux';
import {getAppStateSelector} from '../common/selectors/selectors';
import {Layout} from 'antd';
import Sider from 'antd/es/layout/Sider';
import {Content, Footer, Header} from 'antd/es/layout/layout';
import {UnorderedListOutlined, GroupOutlined} from '@ant-design/icons';

function App() {
    const appStatus = useSelector(getAppStateSelector);

    return (
        <Layout style={{minHeight: "100vh"}}>
            <Header style={{backgroundColor: "#fff"}}>
                <header>It-Blogs</header>
            </Header>
            <Layout>
                <Sider theme={'light'}>
                    <div>
                        <UnorderedListOutlined/>
                        <Link to={PATH.BLOGS}>Blogs</Link>
                    </div>
                    <div>
                        <GroupOutlined/>
                        <Link to={PATH.POSTS}>Posts</Link>
                    </div>
                </Sider>
                {appStatus === 'loading' && <LinearProgress/>}
                {/*<ErrorSnackbars />*/}
                <Content>
                    <Routes>
                        <Route path="/" element={<Navigate to={PATH.BLOGS}/>}/>
                        <Route path={PATH.BLOGS} element={<Blogs/>}/>
                        <Route path={PATH.POSTS} element={<Posts/>}/>
                        <Route path={PATH.PAGE_NOT_FOUND} element={<PageNotFound/>}/>
                        <Route path="*" element={<Navigate to={PATH.PAGE_NOT_FOUND}/>}/>
                    </Routes>
                </Content>
            </Layout>
        </Layout>
    );
}

export default App;
