// region 2. Project Libraries
import * as actionTypes from '../actionTypes';
import * as webAPIs from '../webAPIs';
// end-region

// CREATE
export const createPostFulfilled = () => ({
  type: actionTypes.CREATE_POST_FULFILLED,
});

export const createPostRejected = (err) => ({
  type: actionTypes.CREATE_POST_REJECTED,
  err,
});

export const createPost = post => (dispatch) => {
  webAPIs.createPost(post)
    .then((res) => res.status <= 300 && dispatch(createPostFulfilled()))
    .catch((err) => dispatch(createPostRejected(err)));
};

export const errorCreatePost = post => (dispatch) => {
  webAPIs.errorCreatePost(post)
    .then((res) => res.status <= 300 && dispatch(createPostFulfilled()))
    .catch((err) => dispatch(createPostRejected(err)));
};

// Read
export const getPost = () => ({ /* FIXME: Check if it needs post id */
  type: actionTypes.GET_POST,
  payload: webAPIs.getPost(),
});

// Browse
export const getPostsFulfilled = (data) => ({
  type: actionTypes.GET_POSTS_FULFILLED,
  data,
});

export const getPostsRejected = (err) => ({
  type: actionTypes.GET_POSTS_REJECTED,
  err,
});

export const getPostsList = () => (dispatch) => {
  webAPIs.getPosts()
    .then((res) => dispatch(getPostsFulfilled(res.data)))
    .catch((err) => dispatch(getPostsRejected(err)));
};

// UPDATE
export const updatePostFulfilled = () => ({
  type: actionTypes.UPDATE_POST_FULFILLED,
});

export const updatePostRejected = (err) => ({
  type: actionTypes.UPDATE_POST_REJECTED,
  err,
});

export const updatePost = post => (dispatch) => {
console.log('🚀 > file: posts.js > line 62 > post', post);
  webAPIs.updatePost(post)
    .then((res) => {
      console.log('🚀 > file: posts.js > line 64 > .then > res', res);
      return (res.status <= 300 && dispatch(updatePostFulfilled()))
    })
    .catch((err) => dispatch(updatePostRejected(err)));
};

export const errorUpdatePost = post => (dispatch) => {
  webAPIs.errorUpdatePost(post)
    .then((res) => res.status <= 300 && dispatch(updatePostFulfilled()))
    .catch((err) => dispatch(updatePostRejected(err)));
};

// DELETE
export const deletePostFulfilled = () => ({
  type: actionTypes.DELETE_POST_FULFILLED,
});

export const deletePostRejected = (err) => ({
  type: actionTypes.DELETE_POST_REJECTED,
  err,
});

export const deletePost = (id) => (dispatch) => {
  webAPIs.deletePost(id)
    .then((res) => res.status <= 300 && dispatch(deletePostFulfilled()))
    .catch((err) => dispatch(deletePostRejected(err)));
};

export const errorDeletePost = (id) => (dispatch) => {
  webAPIs.errorDeletePost(id)
    .then((res) => res.status <= 300 && dispatch(deletePostFulfilled()))
    .catch((err) => dispatch(deletePostRejected(err)));
};
