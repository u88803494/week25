import React, { useState, useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import firebase from 'firebase';
import Cookies from 'js-cookie';

const SignOut = ({ onHide, thirdPartySignOut }) => {
  const clearSignInData = () => Cookies.remove('loginState');

  const googleSignOut = () => { // 登出帳號
    firebase.auth().signOut();
    onHide();
    clearSignInData();
    thirdPartySignOut();
  }

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>管理界面</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button variant="danger" onClick={googleSignOut}>
          GOOGLE 登出
        </Button>
      </Modal.Footer>
    </>
  );
};

export default SignOut;
