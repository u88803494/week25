import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import './users.css';

const Users = ({ show, onHide }) => {
  const [password, setPassword] = useState('');

  const changePassword = e => setPassword(e.target.value);
  const handelSubmit = () => console.log(password);

  return (
    <>
      <Modal {...{ show, onHide }} >
        <Modal.Header closeButton>
          <Modal.Title>輸入管理員密碼</Modal.Title>
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
