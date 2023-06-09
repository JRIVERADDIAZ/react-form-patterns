import { FormikErrors, useFormik } from 'formik'

import '../styles/styles.css'

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;

}

const RegisterPageFormik = () => {

    const validate = ({ firstName, lastName, email }: FormValues) => {

        const errors: FormikErrors<FormValues> = {}

        if (!firstName) {
            errors.firstName = 'Required'
        } else if (firstName.length >= 15) {
            errors.firstName = ' Must be 15 characters or less'
        }

        if (!lastName) {
            errors.lastName = 'Required'
        } else if (lastName.length >= 10) {
            errors.lastName = ' Must be 10 characters or less'
        }

        if (!email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            errors.email = 'Invalid email address';
        }

        return errors
    }

    const { handleChange, values, handleSubmit, errors, touched, handleBlur } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validate
    })

    return (
        <>
            <form onSubmit={handleSubmit} noValidate>

                <h1>Formik Basic Tutorial</h1>

                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    name='firstName'
                    placeholder='First Name'
                    onBlur={handleBlur }
                    onChange={handleChange}
                    value={values.firstName}
                />
                {touched.firstName && errors.firstName && <span>First name required</span>}

                <label htmlFor="lastName">last Name</label>
                <input
                    type="text"
                    name='lastName'
                    placeholder='last Name'
                    onBlur={handleBlur }
                    onChange={handleChange}
                    value={values.lastName}
                />
                {touched.lastName && errors.lastName && <span>Last name required</span>}

                <label htmlFor="email">email</label>
                <input
                    type="text"
                    name='email'
                    placeholder='Email'
                    onBlur={handleBlur }
                    onChange={handleChange}
                    value={values.email}
                />
                {touched.email && errors.email && <span>Email is required</span>}
                {touched.email && errors.email && <span>Check for an email valid</span>}

                <button type='submit' >Submit</button>

            </form>

        </>
    )
}

export default RegisterPageFormik