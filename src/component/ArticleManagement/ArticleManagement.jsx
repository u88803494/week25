/* eslint-disable react/jsx-props-no-spreading */
/* TODO: Solve later */
// region 1. Platform Libraries
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
// end-region

// region 2. Project Libraries
import DeleteWindow from './DeleteWindow';
import EditingWindow from './EditingWindow';
// end-region

// region U. UI Markups
import './ArticleManagement.css';
// end-region

const ArticleManagement = (props) => {
  const {
    method, posts, postId, onHide, shouldGetPosts,
  } = props;
  const newPost = { author: '', body: '', title: '' }; // 新增文章用的預設值
  const editingPost = posts.find((post) => (post.id === postId)); // 取得資料
  const defaultState = { // 寫好的預設值用來傳入編輯視窗
    post: postId ? editingPost : newPost,
    empty: { title: false, author: false, body: false },
    submitType: { canSubmit: true, status: '', button: '送出' },
  };

  useEffect(() => { // 當 shouldGetPosts 變化且為真時，就是表示送出成功
    if (shouldGetPosts) {
      setTimeout(onHide, 1000);
    }
  }, [onHide, shouldGetPosts]);

  return (
    <>
      {method === 'create' && <EditingWindow {...props} {...{ defaultState }} />}
      {method === 'editing' && <EditingWindow {...props} {...{ defaultState }} />}
      {method === 'delete' && <DeleteWindow {...props} {...{ defaultState }} />}
    </>
  );
};

ArticleManagement.propTypes = {
  method: PropTypes.string.isRequired,
  onHide: PropTypes.bool.isRequired,
  postId: PropTypes.string.isRequired,
  posts: PropTypes.arrayOf(PropTypes.object(PropTypes.string)).isRequired,
  shouldGetPosts: PropTypes.bool.isRequired,
};

export default ArticleManagement;
