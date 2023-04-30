import { useFormik, Formik, Field, Form, ErrorMessage } from 'formik'

import * as Yup from 'yup'
import '../styles/styles.css'

export const RegisterPageFromikYupComponents = () => {

  return (

    <div>
      <h1>Formik Components </h1>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: ''
        }}
        onSubmit={(values) => {
          console.log(values)
        }}

        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Should have 15 characters or less')
            .required('First Name is Required'),
          lastName: Yup.string()
            .max(15, 'Should have 15 characters or less')
            .required('Last Name is Required'),
          email: Yup.string()
            .email('Email has not a valid format')
            .required('Email is Required'),
          terms: Yup.boolean()
            .oneOf([true], 'Should accept the terms and conditions'),
          jobType: Yup.string()
          .notOneOf([ ''],'Should select a valid Job Title' )
            .required('Should select one Job Title')
        })
        }>

        {(formik) => (

          <Form noValidate>

            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text" />
            <ErrorMessage component="span" name="firstName" />

            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text" />
            <ErrorMessage component="span" name="lastName" />

            <label htmlFor="email"> Email </label>
            <Field name="email" type="text" />
            <ErrorMessage component="span" name="email" />

            <label htmlFor="jobType"> Job Type </label>
            <Field name="jobType" as="select" >
              <option value=""> Select Option </option>
              <option value="dev"> Developer </option>
              <option value="des"> Designer </option> 
              <option value="it-sr"> IT Senior </option>
              <option value="it-jr"> IT Junior </option>
            </Field>
            <ErrorMessage name="jobType" component="span" />

            <label htmlFor="terms">
              <Field name="terms" type="checkbox" />
              Terms and Conditions
            </label>
            <ErrorMessage name="terms" component="span" />

            <button type='submit' >Submit</button>

          </Form >
        )
        }


      </Formik >
    </div>
  )
}

export default RegisterPageFromikYupComponents 