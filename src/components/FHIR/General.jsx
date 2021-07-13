import React from 'react'
import FHIR from '.';

import general from './data/general.json'
export default function General() {
  return (
    <div>
      <FHIR questionnaire={general} />
    </div>
  )
}
