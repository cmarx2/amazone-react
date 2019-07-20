import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ name, description, price, stock, id }) => (
  <ul>
    <li>
      {name}
      {description}
      {price}
      {stock}
    </li>
  </ul>
)
export default ProductList;