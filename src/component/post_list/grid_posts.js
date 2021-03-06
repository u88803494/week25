// region 1. Platform Libraries
import React from 'react';
import { Media, Col, Image } from 'react-bootstrap';
// end-region

// region U. UI Markups
import avatar from '../../images/avatar.png';
import { imageData } from './image_data';
import './grid_posts.css';
// end-region

export const GridPosts = ({ data, historyPush, }) => (
  <>
    {data.map(post => (
      <Media className="blog__post blog__post--grid" key={post.id}>
        <Media.Body className="blog__body">
          <h5
            className="blog__title blog__title--grid"
            data-id={post.id}
            onClick={historyPush}
          >
            {post.title}
          </h5>
          <p
            className="blog__content"
            data-id={post.id}
            onClick={historyPush}
          >
            {post.body}
          </p>
          <div className="blog__author">
            <img
              alt="Generic placeholder"
              className="mr-3 blog__avatar"
              height={32}
              src={avatar}
              width={32}
            />
            <div className="blog__author--info">
              <div className="blog__author--ellipsis">
                {post.author}
              </div>
              <small className="blog__author--ellipsis">
                {post.createdAt}
              </small>
            </div>
          </div>
        </Media.Body>
        <Col xs={6} md={4} >
          <Image
            className="blog__picture"
            src={imageData[parseInt(post.id % 10)]}
            thumbnail
          />
        </Col>
      </Media>
    ))}
  </>
);
