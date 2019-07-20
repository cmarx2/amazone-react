import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Header, Icon, Grid, Divider, Image, Segment, Card } from 'semantic-ui-react'

const ProductList = ({ name, description, price, stock, id }) => (

<div style={{ color: 'white', textAlign: 'center', backgroundColor: "#619902" }}>
  <Card>
    <Image src='https://images.unsplash.com/photo-1518469669531-9b8c528f909d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2534&q=80' wrapped ui={false} />
  
  <Card.Content>
    <Card.Header>

      {name}
      {description}
      {price}
      {stock}
    </Card.Header>
    

  
  
         <Card.Content extra>
        </Card.Content>
      </Card.Content>
    </Card>
  </div>
)
export default ProductList;