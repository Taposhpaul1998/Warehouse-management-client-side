import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebaseinit';
import Socile from '../Socile/Socile';
import './Login.css'

const Login = () => {

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let errorElement;

  if (error) {
    errorElement = <p className="text-danger">Error:{error?.message}</p>
  }
  if (user) {
    navigate(from, { replace: true })
  }
  const handelSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  }
  const navigateRegister = (e) => {
    navigate('/signup')
  }
  const resetPassword = async () => {
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    alert('Sent email');
  }


  return (
    <div className='login-form w-50 mx-auto p-5 m-4 border rounded'>
      <h3 style={{ color: '#242768' }} className='text-center'>Place Sing In</h3>
      <Form onSubmit={handelSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
          <Form.Text className="text-muted">
            We'll never share your password.
          </Form.Text>
        </Form.Group>
        {errorElement}
        <Form.Group className="mb-3 form-link">
          <p>New to Cycle House? <span onClick={navigateRegister} className='text-primary  user-select-none' >Place Register</span></p>
        </Form.Group>
        <Button className='w-100 mx-auto submit-btn' type="submit">
          Singin
        </Button>

        <Form.Group className="m-3 form-link">
          <p>Forgotten password? <span onClick={resetPassword} className='text-primary user-select-none'>Reset password</span></p>
        </Form.Group>
      </Form>
      <Socile></Socile>
    </div>
  );
};

export default Login;