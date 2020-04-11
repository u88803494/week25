import React from 'react';
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
import firebase from 'firebase';
import config from './firebase_config/config';

const App = () => {
  let app;
  if (!firebase.apps.length) {
    app = firebase.initializeApp(config);
  } else {
    app = firebase.app();
  }
  const database = app.database(); // 會出現要把資料寫入 setState 的警告
  console.log(database)
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
