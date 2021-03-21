// region 1. Platform Libraries
import React, { Component } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
// end-region

// region 2. Project Libraries
import { getPost } from '../../store/webAPIs';
// end-region

// region U. UI Markups
import './post.css';
// end-region

const ControllerButton = () => (
  <div className="article__controller">
    <Link to="/posts" className="blog__controller--back">
      <Button variant="outline-dark"> back </Button>
    </Link>
  </div>
);

const ArticleContent = ({ post, date }) => (
  <article>
    <header className="article__header">
      <h1>{post.title}</h1>
      <div className="article__meta">
        <div className="article__info">
          <div className="article__author">
            作者：
            {post.author}
          </div>
          <div className="article__created-at">
            發布時間：
            {date.toString()}
          </div>
        </div>
        <ControllerButton />
      </div>
    </header>
    <hr />
    <ReactMarkdown className="article__body" source={post.body} />
  </article>
);

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
    };
  }

  componentDidMount() {
    const { postId } = this.props.match.params;
    getPost(postId)
      .then((res) => {
        this.setState({
          post: res.data,
        });
      });
  }

  render() {
    const { post } = this.state;
    const date = new Date(post.createdAt);
    return (
      <div className="article">
        {
          post.title
            ? <ArticleContent post={post} date={date} />
            : (
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            )
        }
      </div>
    );
  }
}

export default Post;
