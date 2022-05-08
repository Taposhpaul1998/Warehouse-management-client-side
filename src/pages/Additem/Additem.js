import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Additem = () => {
    return (
        <div className='w-50 mx-auto border m-5 p-3 rounded'>
            <h2 style={{ color: '#242768' }} className='text-center mb-4'>Added New Products</h2>
            <Form>
                <Form.Group className="mb-3" controlId="Name">
                    <Form.Control type="text" placeholder=" Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Photo Url">
                    <Form.Control type="text" placeholder="Photo Url" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Description">
                    <Form.Control type="text" placeholder="Description" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Price">
                    <Form.Control type="number" placeholder="Price" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Suplier">
                    <Form.Control type="text" placeholder="Suplier" required />
                </Form.Group>
                <Button className='w-50 mx-auto mt-2 d-block submit-btn' variant="primary" type="submit">
                    Confirm To Pay
                </Button>
            </Form>
        </div>
    );
};

export default Additem;