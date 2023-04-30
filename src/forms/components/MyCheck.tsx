import { useField } from "formik"

interface Props {
    label: string;
    name: string;
    [x: string]: any;
}

export const MyCheck = ({label, ...props}: Props) => {

    const [field, meta] = useField({...props, type: 'checkbox'})
    console.log(field);
    

    return (
        <>
            <label htmlFor={props.id || props.name}>
                <input type="checkbox" {...field} {...props}  />
                { label }
                </label>
        
            { 
            meta.touched && meta.error && (
                <span className="error"  > { meta.error } </span>
            )            
            }
        </>
    )
}