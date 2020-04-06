import React from 'react';
import './grid_posts.css';
import { Media, Col, Image } from 'react-bootstrap';
import { imageData } from './image_data'

export const GridPosts = ({ data, historyPush, }) => (
  <>
    {data.map(post => (
      <Media className="blog__post blog__post--grid" key={post.id}>
        <Media.Body className="blog__body">
          <h5 className="blog__title blog__title--grid" data-id={post.id} onClick={historyPush}> {post.title} </h5>
          <p className="blog__content" data-id={post.id} onClick={historyPush}>
            {post.body}
          </p>
          <div className="blog__author">
            <img
              width={32}
              height={32}
              className="mr-3 blog__avator"
              src={require('./avator.png')}
              alt="Generic placeholder"
            />
            <div className="blog__author--info">
              <div className="blog__author--ellipsis">{post.author}</div>
              <small className="blog__author--ellipsis">
                {new Date(post.createdAt).toString().replace("GMT+0800 (台北標準時間)","")} 
                </small>
            </div>
          </div>
        </Media.Body>
        <Col xs={6} md={4} >
          <Image className="blog__picture" src={imageData[parseInt(post.id % 10)]} thumbnail />
        </Col>
      </Media>
    ))}
  </>
);
