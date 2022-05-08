import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const Additem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/products`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })

    };
    return (
        <div className='w-50 mx-auto border m-5 p-3 rounded'>
            <h2 style={{ color: '#242768' }} className='text-center mb-4'>Added New Products</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="Name">
                    <Form.Control type="text" placeholder=" Name" required {...register("name")} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Photo Url">
                    <Form.Control type="text" placeholder="Photo Url" required {...register("photo Url")} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Description">
                    <Form.Control type="text" placeholder="Description" required {...register("description")} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Price">
                    <Form.Control type="number" placeholder="Price" required {...register("price")} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Suplier">
                    <Form.Control type="text" placeholder="Suplier" required {...register("suplier")} />
                </Form.Group>
                <Button className='w-50 mx-auto mt-2 d-block submit-btn' variant="primary" type="submit">
                    Confirm To Pay
                </Button>
            </Form>
        </div>
    );
};

export default Additem;