import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import './users.css';
import firebase from 'firebase';
import config from '../../firebase/config';

/* 功能先做出來，之後再優化畫面 */

const Users = ({ show, onHide }) => {
  const [password, setPassword] = useState('');

  const changePassword = e => setPassword(e.target.value);
  const handelSubmit = () => console.log(password);

  const googleSignin = () => { // 彈出視窗註冊

    const provider = new firebase.auth.GoogleAuthProvider(); // google 註冊初始

    firebase.auth().signInWithPopup(provider) // 有 call API 好像就該使用 middleware 處理
      .then(function (result) {
        // 可以獲得 Google 提供 token，token 可透過 Google API 獲得其他數據。  
        var token = result.credential.accessToken;
        var user = result.user;
        console.log(token) // 傳給 Redux 儲存
        console.log(user) // 傳給 Redux 儲存
        alert('登入成功')
        // 這裡面就包含使用者資料，直接存在redux上面應該就行。要保持登入就把這些資料存在 cookie 吧
      });
  }

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
