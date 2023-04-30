import { Formik, Form, } from 'formik'

import * as Yup from 'yup'
import '../styles/styles.css'
import { MyTextInput } from '../components/MyTextInput'
import { MySelect } from '../components/MySelect'
import { MyCheck } from '../components/MyCheck'

const RegisterPagerFormikAbstractation = () => {
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
                        .notOneOf([''], 'Should select a valid Job Title')
                        .required('Should select one Job Title')
                })
                }>

                {(formik) => (

                    <Form noValidate>

                        <MyTextInput
                            label="firstName"
                            name="firstName"
                            placeholder="Fernando"
                        />

                        <MyTextInput
                            label="lastName"
                            name="lastName"
                            placeholder="Fernandez"
                        />

                        <MyTextInput
                            label="email"
                            name="email"
                            placeholder="Email"
                        />

                        <MySelect name="jobType" label="Job Type" >
                            <option value=""> Select Option </option>
                            <option value="dev"> Developer </option>
                            <option value="des"> Designer </option>
                            <option value="it-sr"> IT Senior </option>
                            <option value="it-jr"> IT Junior </option>
                        </MySelect>

                        <MyCheck label='Terms and Conditions' name='terms'  />

                        <button type='submit' >Submit</button>

                    </Form >
                )
                }

            </Formik >
        </div>
    )
}

export default RegisterPagerFormikAbstractation