import React from 'react';
import DepartmentList from './DepartmentList';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const DepartmentIndex = ({ departments }) => (
  <div>
    <h1>Departments</h1>

    <Link to={{ pathname: './create-department' }}> <Button size="tiny" > Create Department</Button></Link>
    {
      departments.map(department => <DepartmentList key={department.id} {...department} />)
    }
  </div>
)

export default DepartmentIndex;