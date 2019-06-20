import React, { Component } from 'react'
import CreateForm from './CreateForm';
import {Container, Segment } from 'semantic-ui-react'
export class CreateIngestion extends Component {

    constructor() {
        super();
        this.state = {
            page: 1
        }
    }

     showResults = (values) => {
        console.log('formval', values)
      }

    nextPage = () => {
        this.setState({ page: this.state.page + 1 })
      }
      previousPage = () => {
        this.setState({ page: this.state.page - 1 })
      }

    render() {
        return (
            <Segment raised>
            <CreateForm page={this.state.page} nextPage={this.nextPage} previousPage={this.previousPage} onSubmit={this.showResults}/> 
            </Segment>
        )
    }
}

export default CreateIngestion
