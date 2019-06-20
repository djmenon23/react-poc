import React from 'react'
import { Step } from 'semantic-ui-react'

const Steps = ({page}) => (
    <>
  <Step.Group ordered attached='top'>
    <Step className= {page === 1 ? 'active' : page > 1 ? 'completed' : ''}>
      <Step.Content>
        <Step.Title>General Information</Step.Title>
      </Step.Content>
    </Step>

     <Step className= {page === 2 ? 'active' : page > 2 ? 'completed' : ''}>
      <Step.Content>
        <Step.Title>Dataset</Step.Title>
      </Step.Content>
    </Step> 

    <Step className= {page === 3 ? 'active' : page > 3 ? 'completed' : ''}>
      <Step.Content >
        <Step.Title>Dataset Properties</Step.Title>
      </Step.Content>
    </Step>
    <Step>
      <Step.Content>
        <Step.Title>Container</Step.Title>
      </Step.Content>
    </Step>
    <Step>
      <Step.Content>
        <Step.Title>Container Properties</Step.Title>
      </Step.Content>
    </Step>
    <Step>
      <Step.Content>
        <Step.Title>Summary</Step.Title>
      </Step.Content>
    </Step>

  </Step.Group>

   </>
  
)

export default Steps