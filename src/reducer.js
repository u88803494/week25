import * as actionTypes from './actionTypes';

const postsInitState = {
  postsListData: [],
  shouldGetPosts: true, // 一開始要 render
  error: '',
};

const windowInitState = {
  method: '',
  show: false, // 是否顯現的值
  postId: null,
};

const adminWindowInitState = {
  show: true, // 測試先直接顯示
}

const postsReducer = (globalState = postsInitState, action) => {
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
        postsListData: action.data // 篩選資料
          .filter(({ title, author, body }) => title && author && body)
          .map(post => ({ // 轉化時間，去掉多餘內容
            ...post,
            createdAt: new Date(post.createdAt)
              .toString()
              .replace(" GMT+0800 (台北標準時間)", ""),
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

const windowReducer = (globalState = windowInitState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_ARTICLE_MANAGEMENT_WINDOW:
      return {
        ...action.postState,
        show: true,
      };
    case actionTypes.HIDE_ARTICLE_MANAGEMENT_WINDOW:
      return {
        ...windowInitState, // 把狀態還原
      };
    default:
      return globalState;
  }
};

const adminWindowReducer = (globalState = adminWindowInitState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_ADMIN_WINDOW:
      return { show: true, };
    case actionTypes.HIDE_ADMIN_WINDOW:
      return { show: false, };
    default:
      return globalState;
  }
}

export { postsReducer, windowReducer, adminWindowReducer };
