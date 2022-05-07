import React from 'react';
import { Button, Form } from 'react-bootstrap';
import Socile from '../Socile/Socile';
import './Login.css'

const Login = () => {
  return (
    <div className='login-form w-50 mx-auto p-5 m-4 border rounded'>
      <h3 style={{ color: '#242768' }} className='text-center'>Place Sing In</h3>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required />
          <Form.Text className="text-muted">
            We'll never share your password.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3 form-link">
          <p>New to Cycle House? <span className='text-primary  user-select-none' >Place Register</span></p>
        </Form.Group>
        <Button className='w-100 mx-auto submit-btn' type="submit">
          Singin
        </Button>

        <Form.Group className="m-3 form-link">
          <p>Forgotten password? <span className='text-primary user-select-none'>Reset password</span></p>
        </Form.Group>
      </Form>
      <Socile></Socile>
    </div>
  );
};

export default Login;