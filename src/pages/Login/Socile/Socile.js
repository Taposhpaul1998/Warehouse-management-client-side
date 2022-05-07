import React from 'react';
import { Button } from 'react-bootstrap';

const Socile = () => {

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div className='border w-50'></div>
                <p className='mt-2 px-3'>or</p>
                <div className='border w-50'></div>
            </div>
            <div className='m-2'>
                <Button className='w-100 mx-auto submit-btn py-2'>
                    <img className='mx-2' style={{ width: '25px' }} src='https://i.ibb.co/Z6NdH0C/google.png' alt="" />
                    Sing With Google
                </Button>
            </div>
            <div className='m-2'>
                <Button className='w-100 mx-auto submit-btn py-2'>
                    <img className='mx-2' style={{ width: '25px' }} src="https://i.ibb.co/wJ06cj4/github.png" alt="" />
                    Sing With Git Hub
                </Button>
            </div>
        </div>
    );
};

export default Socile;

