import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../FormsControls/FormsControls/Input";
import {maxLengthCreator, requiredField} from "../../utilites/validator/validator";
import styles from './Login.module.css'
import {connect} from "react-redux";
import {login} from "../../api/authAPI";
import {Redirect} from "react-router-dom";
import {rootReducerType} from "../../redux/redux-store";

type FormLoginDataType = {
    login: string
    password: string
    rememberMe: boolean
}

export const Login = (props: any) => {
    console.log('propsAUTH', props.isUserAuth)
    const onSubmit = (formData: FormLoginDataType) => {
        props.login(formData.login, formData.password, formData.rememberMe)
    }
    if (props.userAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
const maxLength10 = maxLengthCreator(30)

export const LoginForm: React.FC<InjectedFormProps<FormLoginDataType>> = (props) => {
    const {handleSubmit} = props
    return (
        <form className={styles.form} onSubmit={handleSubmit} action="#">
            <div className={styles.fieldWrapper}>
                <Field className={styles.input} component={Input} name={'login'} placeholder={'login'} type="text" id=""
                       validate={[requiredField, maxLength10]}/>
            </div>
            <div>
                <Field className={styles.input} component={Input} name={'password'} placeholder={'password'}
                       type="password"/>
            </div>
            <div>
                <Field component={'input'} name={'rememberMe'} type="checkbox"/> remember me
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

type MapStateToPropsType = {
    userAuth: boolean
}
const mapStateToProps = (state: rootReducerType): MapStateToPropsType => {
    return {
        userAuth: state.userAuth.data.isUserAuth
    }

}
export const LoginContainer = connect(mapStateToProps, {login})(Login)