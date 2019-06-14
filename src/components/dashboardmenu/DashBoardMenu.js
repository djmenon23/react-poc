import React, { Component } from 'react'
import { Menu, Segment, Responsive } from 'semantic-ui-react'

export default class DashBoardMenu extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
        <Menu color={'blue'} inverted widths={6}>
        <Menu.Item 
        name='Access Channels' 
        active={activeItem === 'Access Channels'} 
        onClick={this.handleItemClick} />
        <Menu.Item
          name='Analytics AI'
          active={activeItem === 'Analytics AI'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Platform Services'
          active={activeItem === 'Platform Services'}
          onClick={this.handleItemClick}
        />
        <Menu.Item name='Data Services' 
        active={activeItem === 'Data Services'} 
        onClick={this.handleItemClick} />
        <Menu.Item
          name='Streams'
          active={activeItem === 'Streams'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Security'
          active={activeItem === 'Security'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}