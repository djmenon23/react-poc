import React from 'react'
import { Form, Label, Button} from 'semantic-ui-react'
import { Field, reduxForm } from 'redux-form';
import { SingleSelection } from '../../CommonCustomComponents';

const options = [
  { key: 'private', text: 'Private', value: 'private' },
  { key: 'protected', text: 'Protected', value: 'protected' },
]

let GeneralInformation = (props) => {
  console.log('fist page', props)
  const { handleSubmit } = props;
  return (
  <Form onSubmit={handleSubmit}>
    <Form.Group widths='equal'>
    <Form.Field>
    <Label  pointing='below' color='teal'>Mapping Name</Label>
    <Field name="mappingName" component="input" type="text" placeholder='Mapping Name'/>
    </Form.Field>
    <Form.Field>
    <Label  pointing='below' color='teal'>Accessibility</Label>
    <Field name="accessibility" component={SingleSelection} options={options} label= "Accessibility"/>
    </Form.Field>
    </Form.Group>
    <Form.Field>
    <Label  pointing='below' color='teal'>Mapping Description</Label>
    <Field name="mappingDescription" component="textarea" type="text" placeholder='Mapping Description'/>
    </Form.Field>
        <Button content='Next' primary type="submit" />
  </Form>
  )
}

export default GeneralInformation = reduxForm({
    // a unique name for the form
    destroyOnUnmount: false, 
    form: 'diwbCreateForm',
    forceUnregisterOnUnmount: true
  })(GeneralInformation)