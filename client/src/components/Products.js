import React, { Component } from 'react';
import axios from 'axios';
import ProductIndex from './ProductIndex';

class Products extends Component {

  state = { products: [] }

  componentDidMount() {
    const { id } = this.props.location.state
    axios.get(`/api/departments/${id}/products`)
      .then(res => {
        this.setState({ products: res.data })
      })
      .catch(err => {
        console.log(err)
      })
  }


  render() {
    const { title, id } = this.props.location.state
    const { products } = this.state
    return (
      <>
        <h1> Products</h1>
        <ProductIndex products={this.state.products} />
      </>
    )
  }


}
export default Products;