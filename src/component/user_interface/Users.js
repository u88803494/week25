import React, { useState, useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import './users.css';
import firebase from 'firebase';
import Cookies from 'js-cookie';

/* 功能先做出來，之後再優化畫面 */
/** 可能要切割兩個 component，
 * 一個是登入的界面，另外一個是登出的界面，登出的界面同時可以用來做管理界面。 */

const Users = ({ show, adminState, onHide, thirdPartyLogin, getCookiesLoginState }) => {
  const [password, setPassword] = useState('');

  const changePassword = e => setPassword(e.target.value);
  const handelSubmit = () => console.log(password);

  const googleSignin = () => { // 彈出視窗註冊
    const provider = new firebase.auth.GoogleAuthProvider(); // google 註冊初始
    thirdPartyLogin(provider);
  }

  useEffect(() => { // 載入 cookie
    const loginState = Cookies.get('loginState');
    if (loginState) {
      getCookiesLoginState(JSON.parse(loginState));
    }
  }, [getCookiesLoginState]);

  useEffect(() => { // 利用 cookie 儲存登入
    if (adminState.isLogin === true) {
      Cookies.set('loginState', { ...adminState }, { expires: 7 })
      onHide();
    };
  }, [adminState.isLogin]); // adminState 可能需要用 useCallback 來實作

  return (
    <>
      <Modal {...{ show, onHide }} >
        <Modal.Header closeButton>
          <Modal.Title>輸入管理員密碼/登入</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="請輸入密碼"
                value={password && password}
                onChange={changePassword} />
            </Form.Group>
            <Form.Text>
              note: 輸入密碼解鎖管理文章功能
            </Form.Text>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={googleSignin}>
            GOOGLE 登入
          </Button>
          <Button variant="secondary" onClick={onHide}>
            取消
          </Button>
          <Button variant="primary" onClick={handelSubmit}>
            確認
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Users;
