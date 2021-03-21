// region 1. Platform Libraries
import React, { useState, useEffect } from 'react';
import { Button, Spinner, ButtonGroup } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
// end-region

// region 2. Project Libraries
import { GridPosts } from './grid_posts';
import { ListPosts } from './list_posts';
// end-region

// region U. UI Markups
import './post_list.css';
// end-region

const PostsHeader = ({ /* TODO: To be a new file */
  isList, setIsList, handleShowWindows, isLogin
}) => {
  return (
    <header className="header">
      <div className="header__title">部落格文章</div>
      <div className="header__body">
        <div className="header__newpost">
          {isLogin &&
            <Button variant="outline-primary" onClick={handleShowWindows} name="create">
              新增文章
            </Button>}
        </div>
        <ButtonGroup aria-label="Basic example">
          <Button
            variant={isList ? "outline-success" : "success"}
            onClick={() => setIsList(false)}
          >
            網格
          </Button>
          <Button
            variant={isList ? "success" : "outline-success"}
            onClick={() => setIsList(true)}
          >
            條列
        </Button>
        </ButtonGroup>
      </div>
    </header>
  )
}

const RenderPosts = ({
  data, history, isList, showManagementWindow, isLogin
}) => {
  const handleShow = (e) => {
    const { id, name } = e.target.dataset;
    showManagementWindow({ method: name, postId: parseInt(id, 10) }); // event 接收的是 string
  };

  const historyPush = e => history.push(`/posts/${e.target.dataset.id}`)

  return (
    <>
      {isList
        ? <ListPosts {...{ data, handleShow, historyPush, isLogin }} />
        : <GridPosts {...{ data, handleShow, historyPush }} />}
    </>
  )
}

const Posts = ({ /* TODO: To be a new file, name is Posts  */
  history, postsListData, showManagementWindow, getPosts, shouldGetPosts, isLogin, familyName,
}) => {
  const [isList, setIsList] = useState(false);

  const handleShowWindows = (e) => showManagementWindow({ method: e.target.name });

  useEffect(() => {
    if (shouldGetPosts) getPosts();
  }, [getPosts, shouldGetPosts]); // 一開始 true 會取得值，然後後續修改成功之後也會取得值

  return (
    <div className="blog container">
      <PostsHeader {...{ handleShowWindows, isList, isLogin, setIsList }} />
      <main className="blog__posts">
        {postsListData.length
          ? <RenderPosts data={postsListData} {...{ history, isList, isLogin, showManagementWindow }} />
          : <Spinner animation="border" />
        }
      </main>
    </div>
  );
};

export default withRouter(Posts);
