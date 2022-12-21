import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../FormsControls/FormsControls/Input";
import {maxLengthCreator, requiredField} from "../../utilites/validator/validator";
import styles from './Login.module.css'
type FormLoginDataType = {
    login: string
    password: string
    rememberMe: boolean
}

export const Login = () => {
    const onSubmit = (formData: FormLoginDataType) => {
        console.log(formData)
    }
    return (
        <div>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
const maxLength10 = maxLengthCreator(10)
export const LoginForm: React.FC<InjectedFormProps<FormLoginDataType>> = (props) => {
    const {handleSubmit} = props
    return (
        <form className={styles.form} onSubmit={handleSubmit} action="#">
            <div className={styles.fieldWrapper}>
                <Field className={styles.input} component={Input} name={'login'} placeholder={'login'} type="text" id="" validate={[requiredField,maxLength10]}/>
            </div>
            <div>
                <Field className={styles.input} component={Input} name={'password'} placeholder={'password'} type="password"/>
            </div>
            <div>
                <Field component={'input'} name={'rememberMe'} type="checkbox"/>
            </div>
            <div>
                <button className={styles.button}>
                    Login
                </button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormLoginDataType>({
    form: 'login'
})(LoginForm)