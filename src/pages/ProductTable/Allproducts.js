import React from 'react';
import { Button, Table } from 'react-bootstrap';
import useProducts from '../Hooks/UsePorducts/useProducts';

const Allproducts = () => {
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
                        <th colSpan={5}>Suplier</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => (
                            <tr>
                                <td>{product.id}</td>
                                <td><img style={{ width: "120px" }} src={product.img} alt="" /></td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td>{product.discripson}</td>
                                <td>{product.suplier}</td>
                                <td>{
                                    <Button variant="primary">Primary</Button>
                                }</td>
                                <td>{
                                    <Button variant="success">Primary</Button>
                                }</td>
                                <td>{
                                    <Button variant="info">Primary</Button>
                                }</td>
                                <td>{
                                    <Button variant="primary">Primary</Button>
                                }</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default Allproducts;