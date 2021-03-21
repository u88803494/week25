// region 1. Platform Libraries
import firebase from 'firebase';
import React, { useEffect } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
// end-region

// region 2. Project Libraries
import About from './component/about';
import Footer from './component/footer';
import Home from './component/home';
import Posts from './component/posts';
import PostsList from './containers/PostsList';
import ArticleManagement from './containers/ArticleManagementContainer';
import Nav from './containers/Nav';
import Users from './containers/Users';
import config from './firebase/config';
// end-region

// region U. UI Markups
import './App.css';
// end-region

const App = () => {
  useEffect(() => { // 初始化 firebase 
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    } else {
      firebase.app();
    }
  }, [])

  return (
    <Router>
      <div className="App">
        <Nav />
        <Users />
        <ArticleManagement />
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={PostsList} />
        <Route path="/about" component={About} />
        <Route path="/posts/:postId" component={Posts} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
