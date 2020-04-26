import React, { useState, useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import './users.css';
import firebase from 'firebase';

const SignIn = ({ show, onHide, thirdPartyLogin }) => {
  const [password, setPassword] = useState('');

  const changePassword = e => setPassword(e.target.value);
  const handelSubmit = () => console.log(password);

  const googleSignin = () => { // 彈出視窗註冊
    const provider = new firebase.auth.GoogleAuthProvider(); // google 註冊初始
    thirdPartyLogin(provider);
  }

  return (
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
  );
};

export default SignIn;
