import React from 'react';
import { connect } from 'react-redux';
import ArticleManagement from '../component/article_management';
import * as postsActions from '../store/actions/posts';
import * as windowActions from '../store/actions/window';

const ArticleManagementContainer = props => <ArticleManagement {...props} />;

const mapStateToProps = state => ({
  ...state.postState,
  posts: state.posts.postsListData,
  shouldGetPosts: state.posts.shouldGetPosts,
  error: state.posts.error,
});

const mapDispatchToProps = dispatch => ({
  createPost: post => dispatch(postsActions.createPost(post)),
  updatePost: post => dispatch(postsActions.updatePost(post)),
  deletePost: id => dispatch(postsActions.deletePost(id)),
  errorCreatePost: post => dispatch(postsActions.errorCreatePost(post)),
  errorUpdatePost: post => dispatch(postsActions.errorUpdatePost(post)),
  errorDeletePost: id => dispatch(postsActions.errorDeletePost(id)),
  showManagementWindow: showData => dispatch(windowActions.showManagementWindow(showData)),
  onHide: () => dispatch(windowActions.hideManagementWindow()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArticleManagementContainer);
