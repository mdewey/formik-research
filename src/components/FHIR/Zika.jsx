import React from 'react'
import FHIR from '.';
import zika from './data/zika.json';
export default function Zika() {
  return (
    <div>
      <FHIR questionnaire={zika} />
    </div>
  )
}
