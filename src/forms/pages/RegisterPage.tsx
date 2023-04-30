import { FormEvent } from 'react'
import useForm from '../hooks/useForm'
import '../styles/styles.css'

export const RegisterPage = () => {

    const {
        isValidEmail,
        name,
        email,
        password,
        passwordConfirmation,
        onChange,
        resetForm
    } = useForm({
        name: '',
        email: '',
        password: '',
        passwordConfirmation: ''
    })

    const submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <>
            <h1> Register Page </h1>
            <form onSubmit={(e) => submit(e)}>
                <input
                    type="text"
                    placeholder='Name'
                    value={name}
                    onChange={onChange}
                    name='name'
                    className={`name.trim().length <= 0 && ${'has-error'}`}
                />
                {name.trim().length <= 0 &&
                    <span> This is a mandatory field. </span>
                }

                <input
                    type="email"
                    placeholder='Email'
                    value={email}
                    onChange={onChange}
                    name='email'
                    className={`!isValidEmail(email) && ${'has-error'}`}
                />
                {!isValidEmail(email) &&
                    <span> Email is not valid. </span>
                }

                <input
                    type="password"
                    placeholder='Password'
                    value={password}
                    onChange={onChange}
                    name='password'
                    className={`password.trim().length <= 6 && ${'has-error'}`}
                />
                {password.trim().length <= 6 && <span> Password should be longer than 6 characters </span>}

                <input
                    type="password"
                    placeholder='Confirm Password'
                    value={passwordConfirmation}
                    onChange={onChange}
                    name='passwordConfirmation'
                    className={`passwordConfirmation.trim().length <= 6 && ${'has-error'}`}
                />
                {passwordConfirmation !== password && <span> Password should match </span>}

                <button type="submit" > Create  </button>

                <button type="submit" onClick={resetForm}> Reset Form  </button>

            </form>
        </>
    )
}

export default RegisterPage