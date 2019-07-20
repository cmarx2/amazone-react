import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

const DepartmentList = ({ title, id }) => (
  <ul>
    <li>
      <Link to={{ pathname: `./products/${id}`, state: { title, id } }}> {title}</Link>
      <Link to={{ pathname: './create-department', state: { title, id } }}>
        <Button size="tiny"> Edit Department</Button></Link>
    </li>
  </ul>
)

export default DepartmentList;