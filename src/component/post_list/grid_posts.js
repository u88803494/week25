import React from 'react';
import './grid_posts.css';
import { Media } from 'react-bootstrap';

export const GridPosts = ({ data, historyPush, }) => (
  <>
    {data.map(post => (
      <Media className="blog__post blog__post--grid">
        <Media.Body className="blog__body">
          <h5 className="blog__title blog__title--grid" data-id={post.id} onClick={historyPush}> {post.title} </h5>
          <p className="blog__content" data-id={post.id} onClick={historyPush}>
            {post.body}
          </p>
          <div className="blog__author">
            <img
              width={32}
              height={32}
              className="mr-3"
              src={require('./avator.png')}
              alt="Generic placeholder"
              className="blog__avator"
            />
            <div className="blog__author--info">
              <div className="blog__author--ellipsis">{post.author}</div>
              <small className="blog__author--ellipsis">{new Date(post.createdAt).toString()} </small>
            </div>
          </div>
        </Media.Body>
      </Media>))}
  </>
);
