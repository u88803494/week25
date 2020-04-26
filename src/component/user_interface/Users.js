import React, { useState, useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import firebase from 'firebase';
import Cookies from 'js-cookie';
import './users.css';
import SignIn from './Sign_in';
import SignOut from './Sign_out';

/* 功能先做出來，之後再優化畫面 */
/** 可能要切割兩個 component，
 * 一個是登入的界面，另外一個是登出的界面，登出的界面同時可以用來做管理界面。 */

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
        !isLogin ? <SignIn {...{ show, onHide, thirdPartyLogin }} />
          : <SignOut {...{ show, onHide, thirdPartySignOut }} />
      }
    </Modal>
  );
};

export default Users;
