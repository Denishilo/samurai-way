import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

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
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export const LoginForm: React.FC<InjectedFormProps<FormLoginDataType>> = (props) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit} action="#">
            <div>
                <Field component={'input'} name={'login'} placeholder={'login'} type="text" id=""/>
            </div>
            <div>
                <Field component={'input'} name={'password'} placeholder={'password'} type="password"/>
            </div>
            <div>
                <Field component={'input'} name={'rememberMe'} type="checkbox"/>
            </div>
            <div>
                <button>
                    Login
                </button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormLoginDataType>({
    form: 'login'
})(LoginForm)