import React from 'react';
import { Button } from 'react-bootstrap';

const Inventory = () => {
    return (
        <div>
            <div style={{ width: '300px' }} className='mx-auto d-black'>
                <Button href="/manageitems" className='submit-btn m-4 w-100'>Manage Item</Button>
            </div>
        </div>
    );
};

export default Inventory;