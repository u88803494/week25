import React from 'react';
import { Media, Col, Image } from 'react-bootstrap';

export const GridPosts = ({ data, history, handleShow, }) => {
  return (
    <>
      {data.map(post => ( // media 或是 jumbotron 修改

        <Media className="blog__post blog__post--grid">
          <Media.Body className="blog__body">
            <h5> 標題：{post.title} </h5>
            <p className="blog__content">
              內容：{post.body}
            </p>
            <img
              width={32}
              height={32}
              className="mr-3"
              src={require('./avator.png')}
              alt="Generic placeholder"
              className="blog__avator"
            />
              作者：{post.author}
            <small>
              時間：{new Date(post.createdAt).toString()}
            </small>
          </Media.Body>

        </Media>))}
    </>);
};
