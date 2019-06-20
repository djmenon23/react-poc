import React, { Component } from 'react'
import {Segment } from 'semantic-ui-react'
import GeneralInformation from '../sharedforms/GeneralInformation';
import Steps from './Steps';
import  Datasets  from '../sharedforms/Datasets';
import RdbmsDatasetProperties from '../sharedforms/RdbmsDatasetProperties';
import PropTypes from 'prop-types';

const CreateForm = ({page, nextPage, previousPage, onSubmit}) => {
return(
    <>
     <Steps page={page}/>
     <br/>
     <br/>
     
   {page === 1 && <GeneralInformation onSubmit={nextPage} />}
   {page ===2 && <Datasets previousPage={previousPage} onSubmit={nextPage}/>}
        {page === 3 && (
          <RdbmsDatasetProperties
            previousPage={previousPage}
            onSubmit={onSubmit}
          />
        )}
 </>
  )
}

export default CreateForm