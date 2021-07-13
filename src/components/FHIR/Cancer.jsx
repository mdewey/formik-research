import React from 'react'
import FHIR from '.';

import cancer from './data/cancer.json'
export default function Cancer() {
  return (
    <div>
      <FHIR questionnaire={cancer} />
    </div>
  )
}
