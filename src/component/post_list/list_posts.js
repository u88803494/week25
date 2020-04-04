import React from 'react';
import './list_posts.css';
import { ListGroup, Button } from 'react-bootstrap';

export const ListPosts = ({ data, handleShow, historyPush }) => (
  <>
    {data.map(post => (
      <ListGroup.Item key={post.id} className="blog__post">
        <div className="blog__title blog__title--list" data-id={post.id} onClick={historyPush}>
          {post.title}
        </div>
        <div className="blog__controller">
          <Button variant="outline-success" data-name="editing" data-id={post.id} onClick={handleShow}>
            編輯
        </Button>
          <Button variant="outline-danger" data-name="delete" data-id={post.id} onClick={handleShow}>
            刪除
        </Button>
        </div>
      </ListGroup.Item>))}
  </>
);
