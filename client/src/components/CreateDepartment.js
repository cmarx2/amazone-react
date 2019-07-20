import React, { Component } from 'react';
import DepartmentForm from './DepartmentForm'
import axios from 'axios';

class CreateDepartment extends React.Component {
  state = { departments: [] }

  componentDidMount() {
    axios.get("/api/departments")
      .then(res => {
        this.setState({ departments: res.data })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <>
        <h1>Department</h1>
        <DepartmentForm currentDepartment={this.props.location.state} />
      </>

    )
  }
}



export default CreateDepartment;