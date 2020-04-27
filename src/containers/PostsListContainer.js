import React from 'react';
import { connect } from 'react-redux';
import Posts from '../component/post_list';
import * as actions from '../actions';

const PostsContainer = props => <Posts {...props} />;

const mapStateToProps = state => ({
  postsListData: state.posts.postsListData,
  shouldGetPosts: state.posts.shouldGetPosts,
  isLogin: state.adminState.isLogin,
  familyName: state.adminState.profileName,
});


const mapDispatchToProps = dispatch => ({
  showManagementWindow: showData => dispatch(actions.showManagementWindow(showData)),
  getPosts: () => dispatch(actions.getPostsList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
