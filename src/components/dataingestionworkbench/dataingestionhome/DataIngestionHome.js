import React, { Component } from 'react'
import { Container, Tab, Grid } from 'semantic-ui-react'
import DataIngestionMenu from './../dataingestionmenu/DataIngestionMenu';
import CardList from '../dataingestioncards/CardList';

const panes = [
    { menuItem: 'Create Mappings', render: () => <Tab.Pane attached={false}><Grid>
        <Grid.Column width={2}><DataIngestionMenu/>
        </Grid.Column><Grid.Column width={10}>
        <CardList/></Grid.Column></Grid></Tab.Pane> },
    { menuItem: 'My Mappings', render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane> },
    { menuItem: 'All Mappings', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
  ]

export class DataIngestionHome extends Component {
    render() {
        return (
           <div>
               <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
               </div>
        )
    }
}

export default DataIngestionHome
