import React, { Component } from 'react';
import { DepartmentConsumer } from '../providers/DepartmentProvider';
import { Button, Form, Segment, Header, } from 'semantic-ui-react';

class DepartmentForm extends React.Component {
  state = { title: '' }

  componentDidMount() {
    if (this.props.currentDepartment)
      this.setState({ title: this.props.currentDepartment.title, id: this.props.currentDepartment.id })
  }

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.currentDepartment) {
      this.props.department.updateDepartment(this.state)
    }
    else {
      this.props.department.addDepartment(this.state);
    }
    this.setState({ title: '' });

  }


  render() {
    const { title } = this.state

    return (

      <Segment basic style={{ background: '#f5f5f5' }}>
        <Header as='h1' textAlign='center'>Department</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label="Title"
            autoFocus
            required
            name='title'
            value={title}
            placeholder='Title'
            onChange={this.handleChange}
          />

          <Segment textAlign='center' basic>
            <Button type='submit' color='purple'>Submit</Button>
          </Segment>
        </Form>
      </Segment>

    )
  }
}

// export default CourseForm;

export default class ConnectedDepartmentForm extends Component {
  render() {
    return (
      <DepartmentConsumer>
        {department => <DepartmentForm {...this.props} department={department} />}
      </DepartmentConsumer>
    )
  }
}