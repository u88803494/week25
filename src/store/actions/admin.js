import * as actionTypes from '../actionTypes';
import firebase from 'firebase';

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
