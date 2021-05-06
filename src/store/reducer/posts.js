// region 2. Project Libraries
import * as actionTypes from '../actionTypes';
// end-region

const postsInitState = {
  postsListData: [],
  shouldGetPosts: true, // 一開始要 render
  error: '',
};

const postsReducer = (globalState = postsInitState, action) => {
  console.log('🚀 > file: posts.js > line 12 > postsReducer > action', action);
  switch (action.type) {
    case actionTypes.CREATE_POST_FULFILLED:
    case actionTypes.UPDATE_POST_FULFILLED:
    case actionTypes.DELETE_POST_FULFILLED:
      return {
        ...globalState,
        shouldGetPosts: true, // 利用這個值的變化使文章列表自動取得資料
        error: '',
      };
    case actionTypes.CREATE_POST_REJECTED:
    case actionTypes.UPDATE_POST_REJECTED:
    case actionTypes.DELETE_POST_REJECTED:
      return {
        ...globalState,
        error: action.err,
      };
    case actionTypes.GET_POSTS_FULFILLED:
      return {
        ...globalState,
        postsListData: action.data.map(post => ({ // 轉化時間，去掉多餘內容
          ...post,
          createdAt: new Date(post.createdAt).toString().replace(" GMT+0800 (台北標準時間)", ""),
        })),
        shouldGetPosts: false,
        error: '',
      };
    case actionTypes.GET_POSTS_REJECTED:
      return {
        ...globalState,
        message: action.err,
      };
    default:
      return { ...globalState, error: '' }; // 當做出其他操作就可以清空 error
  }
};

export default postsReducer;
