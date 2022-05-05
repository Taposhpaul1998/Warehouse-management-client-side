import React, { useEffect } from 'react';
import { useState } from 'react';
import { CardGroup, Container } from 'react-bootstrap';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products,setProducts]=useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=> setProducts(data))
    },[])
    return (
      <div className='invetorySection'>
          <h2>Inventory</h2>
            <div className='product-conteiner p-4'>
           <Container>
                <CardGroup className='row'>
            {
                products.map(product=><Product
                key={product.id}
                product={product}
                ></Product>)
            }
            </CardGroup>
            </Container>
          
        </div>
      </div>
    );
};

export default Products;