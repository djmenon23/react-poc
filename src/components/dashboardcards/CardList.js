import React from 'react'
import { Button, Card, Image, Icon, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
const CardList = () => (
    
  <Card.Group>
    <Card raised style={{width:'25%'}}>
      <Card.Content>
        {/* <Image floated='right' size='mini' src='/images/avatar/large/steve.jpg' /> */}
        <Card.Header>Profilebook</Card.Header>
        <Card.Description>
        Centralized repository of data assets – datasets, containers and sandboxes. 
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <Button animated>
      <Button.Content visible>Launch</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow right' />
      </Button.Content>
    </Button>
      </Card.Content>
    </Card>
    <Card raised style={{width:'25%'}}>
      <Card.Content>
        {/* <Image floated='right' size='mini' src='/images/avatar/large/molly.png' /> */}
        <Card.Header>Data Ingestion</Card.Header>
        <Card.Description>
        Enables self-service data ingestion from variety of data sources.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <Link to='/data-ingestion'><Button animated>
      <Button.Content visible>Launch</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow right' />
      </Button.Content>
    </Button></Link>
      </Card.Content>
    </Card>
  </Card.Group>


)

export default CardList
