import React, { useEffect } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import PostList from './containers/PostsListContainer';
import ArticleManagement from './containers/ArticleManagementContainer';
import Nav from './containers/Nav';
import Users from './containers/Users';
import Home from './component/home';
import Posts from './component/posts';
import About from './component/about';
import Footer from './component/footer';
import config from './firebase/config';
import firebase from 'firebase';

const App = () => {
  useEffect(() => { // 初始化 firebase 
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
      console.log('初始化')
    } else {
      firebase.app();
      console.log('非初始')
    }
  }, [])

  return (
    <Router>
      <div className="App">
        <Nav />
        <Users />
        <ArticleManagement />
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={PostList} />
        <Route path="/about" component={About} />
        <Route path="/posts/:postId" component={Posts} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
