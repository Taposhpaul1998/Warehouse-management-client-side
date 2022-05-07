import React from 'react';
import { Button, Form } from 'react-bootstrap';
import Socile from '../Socile/Socile';

const Signup = () => {
    return (
        <div className='login-form w-50 mx-auto p-5 m-4 border rounded'>
            <h3 style={{ color: '#242768' }} className='text-center'>Place Sing Up</h3>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="name" placeholder="Your Name" required />
                </Form.Group>
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
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button className='w-100 mx-auto submit-btn' variant="primary" type="submit">
                    Sing Up
                </Button>
            </Form>
            <Socile></Socile>
        </div>
    );
};

export default Signup;