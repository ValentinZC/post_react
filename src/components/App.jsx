// libraries
import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
// components
import List from './List';
import Post from './Post';
import Layout from './Layout';
import CreatePost from './CreatePost';
// styles
import './App.css';

const App = () => {
    return (
        <Layout>
            <Switch>
                <Route exact path="/" component={List} />
                <Route path="/post/:id" component={Post} />
                <Route path="/create-post" component={CreatePost} />
            </Switch>
        </Layout>
    );
};

export default App;
