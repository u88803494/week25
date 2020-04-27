import React, { useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import Cookies from 'js-cookie';
import './users.css';
import SignIn from './Sign_in';
import SignOut from './Sign_out';

const Users = ({
  show, isLogin, profileName, token, userId, onHide, thirdPartyLogin, thirdPartySignOut, getCookiesLoginState
}) => {

  useEffect(() => { // 載入 cookie
    const loginState = Cookies.get('loginState');
    if (loginState) {
      getCookiesLoginState(JSON.parse(loginState));
    }
  }, [getCookiesLoginState]);

  useEffect(() => { // 利用 cookie 儲存登入
    if (isLogin === true) {
      Cookies.set('loginState', { isLogin, profileName, token, userId, }, { expires: 7 })
      onHide();
    };
  }, [isLogin, profileName, token, userId, onHide]);

  return (
    <Modal {...{ show, onHide }} >
      {
        !isLogin ?
          <SignIn {...{ show, onHide, thirdPartyLogin }} /> :
          <SignOut {...{ onHide, thirdPartySignOut }} />
      }
    </Modal>
  );
};

export default Users;
