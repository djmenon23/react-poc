import React from 'react'
import { Form, Label, Button } from 'semantic-ui-react'
import { Field, reduxForm } from 'redux-form';
import { MultiSelectTags, SingleSelection } from '../../CommonCustomComponents/index';

const options = [
    { key: 'angular', text: 'Angular', value: 'angular' },
    { key: 'css', text: 'CSS', value: 'css' },
    { key: 'design', text: 'Graphic Design', value: 'design' },
    { key: 'ember', text: 'Ember', value: 'ember' },
    { key: 'html', text: 'HTML', value: 'html' },
    { key: 'ia', text: 'Information Architecture', value: 'ia' },
    { key: 'javascript', text: 'Javascript', value: 'javascript' },
    { key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
    { key: 'meteor', text: 'Meteor', value: 'meteor' },
    { key: 'node', text: 'NodeJS', value: 'node' },
    { key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
    { key: 'python', text: 'Python', value: 'python' },
    { key: 'rails', text: 'Rails', value: 'rails' },
    { key: 'react', text: 'React', value: 'react' },
    { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
    { key: 'ruby', text: 'Ruby', value: 'ruby' },
    { key: 'ui', text: 'UI Design', value: 'ui' },
    { key: 'ux', text: 'User Experience', value: 'ux' },
  ]
let RdbmsDatasetProperties = (props) => {
    const { handleSubmit,previousPage } = props;
return (
  <Form onSubmit={handleSubmit}>
    <Form.Group widths='equal'>
      <Form.Field>
      <Label  pointing='below' color='teal'>Incremental Strategy</Label>
    <Field name="incrementalStrategy" component={SingleSelection} options={options} label= "Incremental Strategy"/>
</Form.Field>
    <Form.Field><Label  pointing='below' color='teal'>Split By</Label>
    <Field name="splitbytag" component= {MultiSelectTags} options = {options} label="Split By"/>
    </Form.Field>
    <Form.Field><Label  pointing='below' color='teal'>Columns to Import</Label>
    <Field name="columnstoimport" component= {MultiSelectTags} options = {options} label="Columns to Import"/>
    </Form.Field>
    </Form.Group>
    <Button content='Previous' primary onClick={previousPage}/>
      <Button content='Submit' primary type="submit"/>
  </Form>
    )
}

export default RdbmsDatasetProperties = reduxForm({
    // a unique name for the form
    destroyOnUnmount: false, 
    form: 'diwbCreateForm',
    forceUnregisterOnUnmount: true
  })(RdbmsDatasetProperties)