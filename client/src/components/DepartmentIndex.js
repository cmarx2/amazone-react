import React from 'react';
import DepartmentList from './DepartmentList';

const DepartmentIndex = ({ departments }) => (
  <div>
    <h1>Departments</h1>
    {
      departments.map(department => <DepartmentList key={department.id} {...department} />)
    }
  </div>
)

export default DepartmentIndex;