// region 1. Platform Libraries
import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
// end-region

// region U. UI Markups
import './list_posts.css';
// end-region

export const ListPosts = ({
  data, handleShow, historyPush, isLogin
}) => (
  <>
    {data.map(post => (
      <ListGroup.Item className="blog__post blog__post--list" key={post.id}>
        <div className="blog__title blog__title--list" data-id={post.id} onClick={historyPush}>
          {post.title}
        </div>
        <div className="blog__controller">
          {isLogin &&
            <> {/* 可以嘗試看看把按鈕變小 */}
              <Button variant="outline-success" data-name="editing" data-id={post.id} onClick={handleShow}>
                編輯
              </Button>
              <Button variant="outline-danger" data-name="delete" data-id={post.id} onClick={handleShow}>
                刪除
              </Button>
            </>
          }
        </div>
      </ListGroup.Item>))}
  </>
);
