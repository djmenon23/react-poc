import React, { Component } from "react";
import ReactDataGrid from "react-data-grid";
import { reduxForm } from 'redux-form';
import { Form, Label, Button} from 'semantic-ui-react'

const columns = [
  { key: "id", name: "ID", editable: true },
  { key: "title", name: "Title", editable: true },
  { key: "complete", name: "Complete", editable: true }
];

const rows = [
  { id: 0, title: "Task 1", complete: 20 },
  { id: 1, title: "Task 2", complete: 40 },
  { id: 2, title: "Task 3", complete: 60 }
];

class Datasets extends Component {
  state = { rows };

  onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
    this.setState(state => {
      const rows = state.rows.slice();
      for (let i = fromRow; i <= toRow; i++) {
        rows[i] = { ...rows[i], ...updated };
      }
      return { rows };
    });
  };
  render() {
    return (
      <Form onSubmit={this.props.handleSubmit}>
      <ReactDataGrid
        columns={columns}
        rowGetter={i => this.state.rows[i]}
        rowsCount={3}
        onGridRowsUpdated={this.onGridRowsUpdated}
        enableCellSelect={true}
      />
      <br/>
        <Button content='Previous' primary onClick={this.props.previousPage}/>
      <Button content='Next' primary type="submit"/>
      </Form>
    );
  }
}

export default Datasets = reduxForm({
    // a unique name for the form
    form: 'diwbdataset',
    destroyOnUnmount: false, 
    forceUnregisterOnUnmount: true
  })(Datasets);