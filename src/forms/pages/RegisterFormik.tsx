import { Formik, Form } from 'formik'

import * as Yup from 'yup'

import '../styles/styles.css'
import { MyTextInput } from '../components/MyTextInput'

const RegisterFormik = () => {

    return (
        <div>
            <h1> Register Page </h1>

            <Formik

                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                }}

                onSubmit={(values) => {
                    console.log(values);
                }}

                validationSchema={Yup.object({
                    firstName: Yup
                        .string()
                        .max(15, 'Should have 15 characters or less')
                        .min(2, 'Should be longer than 2 characters')
                        .required('First Name is Required'),
                    lastName: Yup
                        .string()
                        .max(15, 'Should have 15 characters or less')
                        .required('Last Name is Required'),
                    email: Yup
                        .string()
                        .email('Email has not a valid format')
                        .min(6, 'Should be composed minimun of 6 characters')
                        .required('Email is Required'),
                    password: Yup
                        .string()
                        .required('Please enter a password')
                        .min(8, 'Password too short')
                        .matches(/^(?=.*[a-z])/, 'Must contain at least one lowercase character')
                        .matches(/^(?=.*[A-Z])/, 'Must contain at least one uppercase character')
                        .matches(/^(?=.*[0-9])/, 'Must contain at least one number')
                        .matches(/^(?=.*[!@#%&])/, 'Must contain at least one special character'),
                    confirmPasword: Yup
                        .required(Password should match')
                        .oneOf([Yup.ref('password')])
                })
                }>

                {

                    (formik) => (
                        <Form noValidate>

                            <MyTextInput
                                label="firstName"
                                name="firstName"
                                placeholder="firstName"
                            />

                            <button type="submit" > Create  </button>

                        </Form>
                    )
                }
            </Formik>
        </div >
    )
}

export default RegisterFormik