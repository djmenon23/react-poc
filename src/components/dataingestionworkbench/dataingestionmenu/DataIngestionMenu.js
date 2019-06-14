import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class DataIngestionMenu extends Component {
  state = { activeItem: 'Batch Ingestion' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu pointing secondary vertical>
        <Menu.Item 
        name='Batch Ingestion' 
        active={activeItem === 'Batch Ingestion'} 
        onClick={this.handleItemClick} />
        <Menu.Item
          name='Cross Domain Connectors'
          active={activeItem === 'Cross Domain Connectors'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Social Media Connectors'
          active={activeItem === 'Social Media Connectors'}
          onClick={this.handleItemClick}
        />
    <Menu.Item 
        name='Cloud Connectors' 
        active={activeItem === 'Cloud Connectors'} 
        onClick={this.handleItemClick} />
        <Menu.Item
          name='Data Streams'
          active={activeItem === 'Data Streams'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Adhoc Ingestion'
          active={activeItem === 'Adhoc Ingestion'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Ingestion Generator Wizard'
          active={activeItem === 'Ingestion Generator Wizard'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}