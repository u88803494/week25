import React from 'react';
import { connect } from 'react-redux';
import Posts from '../component/post_list';
import * as windowActions from '../store/actions/window';
import * as postsActions from '../store/actions/posts';

const PostsContainer = props => <Posts {...props} />;

const mapStateToProps = state => ({
  postsListData: state.posts.postsListData,
  shouldGetPosts: state.posts.shouldGetPosts,
  isLogin: state.adminState.isLogin,
  familyName: state.adminState.profileName,
});


const mapDispatchToProps = dispatch => ({
  showManagementWindow: showData => dispatch(windowActions.showManagementWindow(showData)),
  getPosts: () => dispatch(postsActions.getPostsList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
