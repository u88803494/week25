import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Spinner, ButtonGroup } from 'react-bootstrap';
import './post_list.css';
import { ListPosts } from './list_posts';
import { GridPosts } from './grid_posts';

/** 變動部分:
 * ~~1. 文章列表改版，變得更像 blog~~
 * 2. 文章編輯列表改放後台，後台最簡單的就是用密碼確認搭配 hash 確認即可
 * 3. 優化整個畫面
 * ~~4. 由一個 RenderPost 選擇要 render list 或是 blog~~
 * ~~5. 切割檔案出去~~
 */
const PostsHeader = ({ isList, setIsList, handleShowWindows, isLogin }) => {
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

const RenderPosts = ({ data, history, isList, showManagementWindow, isLogin }) => {
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

const Posts = ({
  history, postsListData, showManagementWindow, getPosts, shouldGetPosts, isLogin, familyName,
}) => {
  const [isList, setIsList] = useState(false);

  const handleShowWindows = e => showManagementWindow({ method: e.target.name });

  useEffect(() => {
    if (shouldGetPosts) getPosts();
  }, [getPosts, shouldGetPosts]); // 一開始 ture 會取得值，然後後續修改成功之後也會取得值

  return (
    <div className="blog container">
      <PostsHeader {...{ isList, setIsList, handleShowWindows, isLogin }} />
      <main className="blog__posts">
        {/** 判斷是否讀取中 */
          postsListData.length
            ? <RenderPosts data={postsListData} {...{ history, showManagementWindow, isList, isLogin }} />
            : <Spinner animation="border" />
        }
      </main>
    </div>
  );
};

export default withRouter(Posts);
