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
import {Content, Header} from 'antd/es/layout/layout';
import {GroupOutlined, UnorderedListOutlined} from '@ant-design/icons';
import {BlogPage} from '../features/blogs/blogPage/BlogPage';
import {AddBlog} from '../features/admin/blogs/addBlog/AddBlog';
import {EditBlog} from '../features/admin/blogs/editBlog/EditBlog';
import {Post} from '../features/posts/post/Post';

const routes = [
    {path: PATH.BLOGS, component: <Blogs/>},
    {path:`${PATH.BLOGS}/:blogId${PATH.POSTS}`, component: <BlogPage/>},
    {path: PATH.ADD_BLOG, component: <AddBlog/>},
    {path: `${PATH.EDIT_BLOG}/:blogId`, component: <EditBlog/>},
    {path: PATH.POSTS, component: <Posts/>},
    {path: `${PATH.POSTS}/:postId`, component: <Post />},
    // {path: PATH.EDIT_POST, component: },
    // {path: PATH.ADD_POST, component: },
    {path: PATH.PAGE_NOT_FOUND, component: <PageNotFound/>},
]


function App() {
    const appStatus = useSelector(getAppStateSelector);

    return (
        <Layout style={{minHeight: '100vh'}}>
            <Header style={{backgroundColor: '#fefefd'}}>
                <header>It-Blogs</header>
            </Header>
            <Layout>
                <Sider theme={'light'} style={{backgroundColor: '#fefefd'}}>
                    <div style={{padding: '20px'}}>
                        <UnorderedListOutlined/>
                        <Link to={PATH.BLOGS}>Blogs</Link>
                    </div>
                    <div style={{padding: '20px'}}>
                        <GroupOutlined/>
                        <Link
                            // style={({isActive}) => isActive ? {color: 'green'} : {
                            //     textDecoration: 'none',
                            //     color: 'black'
                            // }}
                            to={PATH.POSTS}>
                            Posts</Link>
                    </div>
                </Sider>
                {appStatus === 'loading' && <LinearProgress/>}
                {/*<ErrorSnackbars />*/}
                <Content style={{paddingRight: "5%", paddingLeft: "2%"}}>
                    <Routes>
                        <Route path="/" element={<Navigate to={PATH.BLOGS}/>}/>
                        {routes.map(({path, component}, index) => {
                            return(
                                <Route key={index} path={path} element={component}/>
                            )
                        })}
                        <Route path="*" element={<Navigate to={PATH.PAGE_NOT_FOUND}/>}/>
                    </Routes>
                </Content>
            </Layout>
        </Layout>
    );
}

export default App;
