import React, { Component } from "react";
import axios from "axios";

const DepartmentContext = React.createContext();
export const DepartmentConsumer = DepartmentContext.Consumer;

export class DepartmentProvider extends Component {

  state = { departments: [], products: [] }

  componentDidMount() {
    axios.get("/api/departments")
      .then(res => {
        this.setState({ departments: res.data })
      })
      .catch(err => {
        console.log(err)
      })
  }

  updateDepartment = (department) => {
    const { id } = department
    axios.put(`/api/departments/${id}`, department)
      .then(res => {
        const departments = this.state.departments.map(c => {
          if (c.id === id)
            return res.data
          return c
        })
        this.setState({ departments })
        window.location.href = '/'
      }).catch(err => {
        console.log(err)
      })
  }

  deleteDepartment = (id) => {
    axios.delete(`api/departments/${id}`)
      .then(res => {
        const { departments } = this.state
        this.setState({ departments: departments.filter(c => c.id !== id) })
        window.location.href = '/'
      })
  }

  addDepartment = (department) => {
    axios.post('/api/departments', { department })
      .then(res => {
        const { departments } = this.state
        this.setState({ departments: [...departments, res.data] })
        window.location.href = '/'
      })
      .catch(err => {
        console.log(err)
      })
  }

  addProduct = (product) => {
    axios.post(`/api/departments/${product.department_id}/products`, { product })
      .then(res => {
        const { products } = this.state
        this.setState({ products: [...products, res.data] })
        // window.location.href = '/admin-courses'
      })
      .catch(err => {
        console.log(err)
      })
  }

  deleteProduct = (departmentId, id) => {
    axios.delete(`/api/departments/${departmentId}/products/${id}`)
      .then(res => {
        const { products } = this.state
        this.setState({ products: products.filter(c => c.id !== id) })
        // window.location.href = '/admin-courses'
      })
  }

  updateProduct = (product) => {
    const { id, department_id } = product
    axios.put(`/api/departments/${department_id}/products/${id}`, product)
      .then(res => {
        const product = this.state.products.map(c => {
          if (c.id === id)
            return res.data
          return c
        })
        this.setState({ product })
        // window.location.href = '/admin-courses'
      })
  }
  render() {
    return (
      <DepartmentContext.Provider value={{
        ...this.state,
        deleteDepartment: this.deleteDepartment,
        updateDepartment: this.updateDepartment,
        addDepartment: this.addDepartment,
        addProduct: this.addProduct,
        deleteProduct: this.deleteProduct,
        updateProduct: this.updateProduct,
      }}>
        {this.props.children}
      </DepartmentContext.Provider>
    )
  }
}
