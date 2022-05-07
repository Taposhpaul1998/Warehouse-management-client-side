import React from 'react';
import { Button, Table } from 'react-bootstrap';

const Inventory = () => {
    return (
        <div>
            <Table style={{ width: '80%' }} className=' mx-auto d-black mt-5' striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Images</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
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