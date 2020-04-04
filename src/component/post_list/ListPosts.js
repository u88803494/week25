import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

export const ListPosts = ({ data, history, handleShow, }) => {
  return (<>
    {data.map(post => (<ListGroup.Item key={post.id} className="blog__post">
      <div className="blog__title" onClick={() => history.push(`/posts/${post.id}`)}>
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
  </>);
};
