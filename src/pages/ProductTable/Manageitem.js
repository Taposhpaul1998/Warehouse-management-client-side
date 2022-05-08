import React from 'react';
import { Button, Table } from 'react-bootstrap';
import useProducts from '../Hooks/UsePorducts/useProducts';

const Manageitem = () => {
    const [products, setProducts] = useProducts();
    console.log(products);
    return (
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Images</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Discripson</th>
                        <th colSpan={3}>Suplier</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => (
                            <tr>
                                <td>{product._id}</td>
                                <td><img style={{ width: "120px" }} src={product.img} alt="" /></td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td>{product.discripson}</td>
                                <td>{product.suplier}</td>
                                <td>{
                                    <Button href='/inventory' variant="primary">Add</Button>
                                }</td>
                                <td>{
                                    <Button variant="danger">Delete</Button>
                                }</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            <div style={{ width: '300px' }} className='mx-auto d-black'>
                <Button href="/addedItem" className='submit-btn m-4 w-100'>Add New Item</Button>
            </div>
        </div>
    );
};

export default Manageitem;