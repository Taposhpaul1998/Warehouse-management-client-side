import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Product.css'

const Product = ({product}) => {
    console.log(product);
    const {name,img,discripson}= product
    return (
       <div className='product-card col-sm-12 col-md-6 col-lg-4 g-4 '>
                 <Card  style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
      {discripson}
    </Card.Text>
    <Button className='w-100' variant="primary">Update</Button>
  </Card.Body>
</Card>
       </div>
    );
};

export default Product;