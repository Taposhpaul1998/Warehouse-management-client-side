import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const { productid } = useParams();
    const [update, setUpdate] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/products/${productid}`)
            .then(res => res.json())
            .then(data => setUpdate(data))
    }, [])

    return (
        <div>
            <h2>product id:{update._id}</h2>
            <Table style={{ width: '80%' }} className=' mx-auto d-black mt-5' striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>{update.img}</th>
                        <th>{update.name}</th>
                        <th>{update.price}</th>
                        <th>{update.discripson}</th>
                        <th>{update.quantity}</th>
                        <th> <Button href='/inventory' variant="primary">Update Products</Button></th>

                    </tr>
                </thead>
            </Table>

            <div style={{ width: '300px' }} className='mx-auto d-black'>
                <Button href="/manageitems" className='submit-btn m-4 w-100'>Manage Item</Button>
            </div>
        </div >
    );
};

export default Inventory;