
// region 1. Platform Libraries
import React from 'react';
import { connect } from 'react-redux';
// end-region

// region 2. Project Libraries
import Posts from '../component/post_list';
import * as postsActions from '../store/actions/posts';
import * as windowActions from '../store/actions/window';
// end-region

const PostsContainer = (props) => <Posts {...props} />;

const mapStateToProps = (state) => ({
  postsListData: state.posts.postsListData,
  shouldGetPosts: state.posts.shouldGetPosts,
  isLogin: state.adminState.isLogin,
  familyName: state.adminState.profileName,
});


const mapDispatchToProps = (dispatch) => ({
  showManagementWindow: (showData) => (dispatch(windowActions.showManagementWindow(showData))),
  getPosts: () => (dispatch(postsActions.getPostsList())),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
