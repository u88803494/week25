import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { ListGroup, Button, Spinner, ButtonGroup, Media } from 'react-bootstrap';
import './post_list.css';

/** 變動部分:
 * 1. 文章列表改版，變得更像 blog
 * 2. 文章編輯列表改放後台，後台最簡單的就是用密碼確認搭配 hash 確認即可
 * 3. 優化整個畫面
 * 4. 由一個 RenderPost 選擇要 render list 或是 blog
 * 5. 切割檔案出去
 */

const RenderListPosts = ({ data, history, showManagementWindow }) => {
  const handleShow = (e) => {
    const { id, name } = e.target.dataset;
    showManagementWindow({ method: name, postId: parseInt(id, 10) }); // event 接收的是 string
  };

  return (
    <>
      {data.map(post => (
        <ListGroup.Item
          key={post.id}
          className="blog__post"
        >
          <div
            className="blog__title"
            onClick={() => history.push(`/posts/${post.id}`)}
          >
            {post.title}
          </div>
          <div className="blog__controller">
            <Button
              variant="outline-success"
              data-name="editing"
              data-id={post.id}
              onClick={handleShow}
            >
              編輯
            </Button>
            <Button
              variant="outline-danger"
              data-name="delete"
              data-id={post.id}
              onClick={handleShow}
            >
              刪除
            </Button>
          </div>
        </ListGroup.Item>
      ))}
    </>
  );
};

const RenderGridPosts = ({ data, history, showManagementWindow }) => {
  return (
    <>
      {data.map(post => ( // media 或是 jumbotron 修改
        <Media className="blog__post blog__post--grid">
          <img
            width={64}
            height={64}
            className="mr-3"
            src="holder.js/64x64"
            alt="Generic placeholder"
          />
          <Media.Body>
            <h5> {post.title} </h5>
            <pre> {/* 限制高度，多的不顯示變成... */}
              {post.body}
            </pre>
          
          {/* 用點擊文章或標題看更多就好 */}
          </Media.Body>
        </Media>

      ))}
    </>
  )
}

const PostsHeader = ({ isList, setIsList, handleShowWindows }) => {
  return (
    <header className="header">
      <div className="header__title">部落格文章</div>
      <div className="header__body">
        <div className="header__newpost">
          <Button variant="outline-primary" onClick={handleShowWindows} name="create">
            新增文章
          </Button>
        </div>
        <ButtonGroup aria-label="Basic example">
          <Button
            variant={isList ? "success" : "outline-success"}
            onClick={() => setIsList(true)}
          >
            條列
        </Button>
          <Button
            variant={isList ? "outline-success" : "success"}
            onClick={() => setIsList(false)}
          >
            網格
        </Button>
        </ButtonGroup>
      </div>
    </header>
  )
}

const Posts = ({
  history, postsListData, showManagementWindow, getPosts, shouldGetPosts
}) => {
  const [isList, setIsList] = useState(false);

  const handleShowWindows = e => showManagementWindow({ method: e.target.name });

  useEffect(() => {
    if (shouldGetPosts) getPosts();
  }, [getPosts, shouldGetPosts]); // 一開始 ture 會取得值，然後後續修改成功之後也會取得值

  return (
    <div className="blog">
      <PostsHeader {...{ isList, setIsList, handleShowWindows }} />
      <main className="blog__posts">
        {/** 判斷是否讀取中 */
          postsListData.length
            ? <RenderGridPosts data={postsListData} {...{ history, showManagementWindow, isList }} />
            : <Spinner animation="border" />
        }
      </main>
    </div>
  );
};

export default withRouter(Posts);
