
import * as Yup from 'yup'

import { Form, Formik } from 'formik';
import formJson from '../data/custom-form.json'
import { MyTextInput } from '../components/MyTextInput';
import { MySelect } from '../components/MySelect';

import '../styles/styles.css'

const DinamicForm = () => {

    const initialValues: { [x: string]: any } = {}
    const requiredFields: { [x: string]: any } = {}

    for (const input of formJson) {
        initialValues[input.name] = input.value

        if (!input.validations) continue;

        let schema = Yup.string()

        for (const rule of input.validations) {

            if (rule.type === 'required') {
                schema = schema.required('Should be filled')
            }

            if(rule.type === "minLegth") {
                schema = schema.min( (rule as any).value || 1, 'Should have a min length of 5 characters')
            }

            if(rule.type === "email") {
                schema = schema.email(`Should have an email format`)
            }

        }

        requiredFields[input.name] = schema
    }

    const validationSquema = Yup.object({ ...requiredFields })

    return (
        <div>
            <Formik

                initialValues={initialValues}
                validationSchema={validationSquema}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >
                {
                    (formik) => (
                        <Form>

                            <span> Hola mundo </span>

                            {
                                formJson.map(({ type, name, placeholder, label, options }) => {

                                    if (type === "input" || type === 'password' || type === 'email') {


                                        return <MyTextInput
                                            key={name}
                                            type={(type as any)}
                                            name={name}
                                            label={label}
                                            placeholder={placeholder}
                                        />
                                    } else if (type === 'select') {
                                        return (<MySelect
                                            key={name}
                                            name={name}
                                            label={label}
                                        >
                                            <option
                                                value=""
                                            > Select option </option>
                                            {
                                                options.map(({ id, label }) => (
                                                    <option
                                                        key={id}
                                                        value={label}
                                                    >
                                                        {label}
                                                    </option>
                                                ))
                                            }
                                        </MySelect>
                                        )
                                    }


                                    return <span>Type: {type} no es soportado </span>
                                })
                            }
                            <button type='submit' > Submit Information</button>
                        </Form>
                    )
                }
            </Formik >
        </div>
    )
}

export default DinamicForm