import * as actionTypes from '../actionTypes';
import * as webAPIs from '../webAPIs';
import firebase from 'firebase';

// CREATE
export const createPostFulfilled = () => ({
  type: actionTypes.CREATE_POST_FULFILLED,
});

export const createPostRejected = err => ({
  type: actionTypes.CREATE_POST_REJECTED,
  err,
});

export const createPost = post => (dispatch) => {
  webAPIs.createPost(post)
    .then(res => res.status <= 300 && dispatch(createPostFulfilled()))
    .catch(err => dispatch(createPostRejected(err)));
};

export const errorCreatePost = post => (dispatch) => {
  webAPIs.errorCreatePost(post)
    .then(res => res.status <= 300 && dispatch(createPostFulfilled()))
    .catch(err => dispatch(createPostRejected(err)));
};

// Read
export const getPost = () => ({
  type: actionTypes.GET_POST,
  payload: webAPIs.getPost(),
});

export const getPostsFulfilled = data => ({
  type: actionTypes.GET_POSTS_FULFILLED,
  data,
});

export const getPostsRejected = err => ({
  type: actionTypes.GET_POSTS_REJECTED,
  err,
});

export const getPostsList = () => (dispatch) => {
  webAPIs.getPosts()
    .then(res => dispatch(getPostsFulfilled(res.data)))
    .catch(err => dispatch(getPostsRejected(err)));
};

// UPDATA
export const updatePostFulfilled = () => ({
  type: actionTypes.UPDATE_POST_FULFILLED,
});

export const updatePostRejected = err => ({
  type: actionTypes.UPDATE_POST_REJECTED,
  err,
});

export const updatePost = post => (dispatch) => {
  webAPIs.updatePost(post)
    .then(res => res.status <= 300 && dispatch(updatePostFulfilled()))
    .catch(err => dispatch(updatePostRejected(err)));
};

export const errorUpdatePost = post => (dispatch) => {
  webAPIs.errorUpdatePost(post)
    .then(res => res.status <= 300 && dispatch(updatePostFulfilled()))
    .catch(err => dispatch(updatePostRejected(err)));
};

// DELETE
export const deletePostFulfilled = () => ({
  type: actionTypes.DELETE_POST_FULFILLED,
});

export const deletePostRejected = err => ({
  type: actionTypes.DELETE_POST_REJECTED,
  err,
});

export const deletePost = id => (dispatch) => {
  webAPIs.deletePost(id)
    .then(res => res.status <= 300 && dispatch(deletePostFulfilled()))
    .catch(err => dispatch(deletePostRejected(err)));
};

export const errorDeletePost = id => (dispatch) => {
  webAPIs.errorDeletePost(id)
    .then(res => res.status <= 300 && dispatch(deletePostFulfilled()))
    .catch(err => dispatch(deletePostRejected(err)));
};

export const showManagementWindow = postState => ({
  type: actionTypes.SHOW_ARTICLE_MANAGEMENT_WINDOW,
  postState,
});

export const hideManagementWindow = () => ({
  type: actionTypes.HIDE_ARTICLE_MANAGEMENT_WINDOW,
});

export const showAdminWindow = () => ({
  type: actionTypes.SHOW_ADMIN_WINDOW,
});

export const hideAdminWindow = () => ({
  type: actionTypes.HIDE_ADMIN_WINDOW,
});

export const thirdPartyLoginFulfilled = res => ({
  type: actionTypes.THIRD_PARTY_LOGIN_FULFILLED,
  res,
});

export const thirdPartyLoginRejected = err => ({
  type: actionTypes.THIRD_PARTY_LOGIN_REJECTED,
  err,
});

export const thirdPartyLogin = (provider) => dispatch => {
  firebase.auth().signInWithPopup(provider)
    .then(res => dispatch(thirdPartyLoginFulfilled(res)))
    .catch(err => dispatch(thirdPartyLoginRejected(err)));
};

export const thirdPartySignOut = () =>( {
  type: actionTypes.THIRD_PARTY_SIGNOUT,
})

export const getCookiesLoginState = loginState => ({
  type: actionTypes.GET_COOKIES_LOGIN_STATE,
  loginState,
});
