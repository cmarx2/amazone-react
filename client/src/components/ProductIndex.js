import React from 'react';
import ProductList from './ProductList';


const ProductIndex = ({ products }) => (
  <div>
    <h1>All Products</h1>
    {
      products.map(product => <ProductList key={product.id} {...product} />)
    }
  </div>

)

export default ProductIndex;