import React from 'react';
import { Form, Dropdown } from 'semantic-ui-react';

export const MultiSelectTags = props  => (
    <Form.Field>
    <Dropdown options = {props.options}
              value={props.input.value}
              onChange={(param,data) => props.input.onChange(data.value)}
              placeholder={props.label} 
              fluid multiple selection
     />
   </Form.Field>
)

export const SingleSelection = props => (
  <Dropdown
  placeholder={props.label}
  value={props.input.value}
  onChange={(param,data) => props.input.onChange(data.value)}
  fluid
  selection
  options={props.options}
/>
)