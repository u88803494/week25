import * as actionTypes from '../actionTypes';

const adminInitState = {
  show: false,
  isLogin: false,
  token: null,
  userId: null,
  profileName: null,
  error: null,
}

const adminReducer = (globalState = adminInitState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_ADMIN_WINDOW:
      return {
        ...globalState,
        show: true,
      };
    case actionTypes.HIDE_ADMIN_WINDOW:
      return {
        ...globalState,
        show: false,
      };
    case actionTypes.THIRD_PARTY_LOGIN_FULFILLED:
      return {
        ...globalState,
        isLogin: true,
        token: action.res.credential.accessToken,
        userId: action.res.additionalUserInfo.profile.id,
        profileName: action.res.additionalUserInfo.profile.family_name,
      };
    case actionTypes.THIRD_PARTY_LOGIN_REJECTED:
      return {
        ...globalState,
        isLogin: false,
        error: action.err
      };
    case actionTypes.GET_COOKIES_LOGIN_STATE:
      return {
        ...globalState,
        ...action.loginState,
      };
    case actionTypes.THIRD_PARTY_SIGNOUT:
      return {
        ...globalState,
        ...adminInitState,
      }
    default:
      return globalState;
  }
}

export default adminReducer;
