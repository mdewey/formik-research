import React, {useState, useEffect} from 'react'
import { Formik, Field, Form } from 'formik';

export default function FHIR(props) {
  const { questionnaire } = props;
  const {item: questions} = questionnaire
  const [title, setTitle] = useState(questionnaire.title)
  const init = {}
  questions.forEach(question => {
    init[question.linkId] = "default"
  });

  const handleSubmit = (values, actions) => {
    console.log('submitting', {values, actions})
   }

  useEffect(() => {
    console.log('questionnaire', {questionnaire})

  }, [questionnaire])
  return (
    <div>
      <h1>{title}</h1>
      <h2>questions, {questions.length}</h2>
      <Formik initialValues={init} onSubmit={handleSubmit}>
        <Form className='item-container'>
          {questions.map((question, i) => {
            console.log({question, i, value: init[question.linkId]});
            return <div key={i} className='item'>
              <label htmlFor={question.linkId}>{question.text}</label>
              <Field id={question.linkId} name={question.linkId} type="text" />
            </div>
          })}
          <button type="submit">Answer</button>

        </Form>
      </Formik>
    </div>
  )
}
