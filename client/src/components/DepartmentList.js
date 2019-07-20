import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Header, Icon, Grid, Divider, Image, Segment, Card } from 'semantic-ui-react'

const DepartmentList = ({ title, id }) => (
  
  <div style={{ color: 'white', textAlign: 'center', backgroundColor: "#619902" }}>

<Card>
  
  <Image src='https://images.unsplash.com/photo-1518469669531-9b8c528f909d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2534&q=80' wrapped ui={false} />
  
  <Card.Content>
    <Card.Header>
      <Link to={{ pathname: `./products/${id}`, state: { title, id } }}> {title}</Link>
    </Card.Header>

    <Card.Meta>
        {/* <span className='date'>Joined in 2015</span>     */}
    </Card.Meta>

  <Card.Description>
      <Link to={{ pathname: './create-department', state: { title, id } }}> <br /> <Button size="tiny" > Edit Department</Button></Link>
  </Card.Description>
     
      {/* <a>
        <Icon name='user' />
        22 Friends
      </a> */}
  
  
         <Card.Content extra>
        </Card.Content>
      </Card.Content>
    </Card>
  </div>
)
export default DepartmentList;