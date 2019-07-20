import React from 'react';
import DepartmentList from './DepartmentList';
import { Grid } from 'semantic-ui-react';

const DepartmentIndex = ({ departments }) => (

  <div style={{ color: "#619902", textSize: "50px" }}>
    <h1>Departments</h1>
  <div style={{ color: "#8A691E"}}>
      <h3> ──────────── </h3>
  </div>
  
    <Grid padded>
      {
        departments.map(department => <DepartmentList key={department.id} {...department} />)
      }
    </Grid>
  </div>
)

export default DepartmentIndex;