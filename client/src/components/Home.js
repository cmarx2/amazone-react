import React, { Component } from 'react';
import DepartmentIndex from './DepartmentIndex';
import axios from 'axios';
import { DepartmentConsumer } from '../providers/DepartmentProvider';

class Home extends Component {
  state = { departments: [] }

  componentDidMount() {
    axios.get(`/api/departments`)
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
        <DepartmentIndex departments={this.state.departments} />
      </>
    )
  }
}

export default Home;

