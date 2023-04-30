import { useFormik } from 'formik'

import * as Yup from 'yup'
import '../styles/styles.css'

const RegisterPageFormikYupValidation = () => {

    const { handleSubmit, errors, touched, getFieldProps } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Should have 15 characters or less')
                .required('First Name is Required'),
            lastName: Yup.string()
                .max(15, 'Should have 15 characters or less')
                .required('Last Name is Required'),
            email: Yup.string()
                .email('Email has not a valid format')
                .required('Email is Required')
        })
    })
    return (
        <form onSubmit={handleSubmit} noValidate>

            <h1>Formik Basic Tutorial</h1>

            <label htmlFor="firstName">First Name</label>
            <input
                type="text"
                placeholder='First Name'
                {...getFieldProps('firstName')}
            />
            {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

            <label htmlFor="lastName">last Name</label>
            <input
                type="text"
                placeholder='last Name'
                {...getFieldProps('lastName')}
            />
            {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

            <label htmlFor="email">email</label>
            <input
                type="text"
                placeholder='Email'
                {...getFieldProps('email')}
            />
            {touched.email && errors.email && <span>{errors.email}</span>}
            {touched.email && errors.email && <span>{errors.email}</span>}

            <button type='submit' >Submit</button>

        </form>
    )
}

export default RegisterPageFormikYupValidation