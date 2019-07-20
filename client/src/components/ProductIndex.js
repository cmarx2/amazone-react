import React from 'react';
import ProductList from './ProductList';
import { Grid } from 'semantic-ui-react';


const ProductIndex = ({ products }) => (
  <div>
    <h1>All Products</h1>
    <Grid padded>
    {
      products.map(product => <ProductList key={product.id} {...product} />)
    }
    </Grid>
  </div>

)

export default ProductIndex;