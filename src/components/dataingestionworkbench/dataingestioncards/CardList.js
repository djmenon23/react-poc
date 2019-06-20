import React from 'react'
import { Button, Card, Image, Icon, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
const CardList = () => (
    
  <Card.Group>
    <Card raised>
      <Card.Content>
        {/* <Image floated='right' size='mini' src='/images/avatar/large/steve.jpg' /> */}
        <Card.Header>Relational Database-HDFS</Card.Header>
      </Card.Content>
      <Card.Content extra>
      <Link to='/data-ingestion-form'><Button animated>
      <Button.Content visible>Launch</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow right' />
      </Button.Content>
    </Button></Link>
      </Card.Content>
    </Card>
    <Card raised>
      <Card.Content>
        {/* <Image floated='right' size='mini' src='/images/avatar/large/molly.png' /> */}
        <Card.Header>Relational Database-HIVE</Card.Header>
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
