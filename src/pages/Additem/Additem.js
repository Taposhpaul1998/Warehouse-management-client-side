import React from 'react';

const Additem = () => {
    return (
        <div className='w-50 mx-auto border m-5 p-3 rounded'>
            <h2 style={{ color: '#242768' }} className='text-center mb-4'>Added New Products</h2>
            <form className='d-flex flex-column'>
                <input className='mb-2' placeholder='Name' />
                <input className='mb-2' placeholder='Photo Url' />
                <textarea className='mb-2' placeholder='Description' />
                <input className='mb-2' placeholder='Price' type="number" />
                <input className='mb-2' placeholder='Suplier' type="text" />
                <input className='submit-btn' value="Add Service" type="submit" />
            </form>
        </div>
    );
};

export default Additem;