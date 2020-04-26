import React, { useState, useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import firebase from 'firebase';

const SignIn = ({ onHide, thirdPartyLogin }) => {
  const googleSignin = () => { // 彈出視窗註冊
    const provider = new firebase.auth.GoogleAuthProvider(); // google 註冊初始
    thirdPartyLogin(provider);
  }

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>登入</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button variant="danger" onClick={googleSignin}>
          GOOGLE 登入
        </Button>
        <Button variant="secondary" onClick={onHide}>
          取消
        </Button>
      </Modal.Footer>
    </>
  );
};

export default SignIn;
