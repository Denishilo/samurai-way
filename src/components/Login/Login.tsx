import React, {useState} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "components/FormsControls/Input";
import {maxLengthCreator, requiredField} from "utilites/validator/validator";
import styles from './Login.module.css'
import {connect} from "react-redux";
import {login} from "api/authAPI";
import {Redirect} from "react-router-dom";
import {rootReducerType} from "redux/redux-store";

export const Login = (props: any) => {
const [captcha, setCaptcha] =useState<string>('')
    const onSubmit = (formData: FormLoginDataType) => {
        props.login(formData.login, formData.password, formData.rememberMe, formData.captchaUrl)
    }
    if (props.userAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <LoginReduxForm onSubmit={(formData:FormLoginDataType)=>onSubmit({...formData,captchaUrl:captcha })} captchaUrl={props.captchaUrl}/>
            {props.captchaUrl && <img src={props.captchaUrl} alt='captcha'/>}
            {props.captchaUrl && <div>
                <input className={styles.input} value={captcha} onChange={(e)=>setCaptcha(e.currentTarget.value)} />
            </div>}
        </div>
    )
}
const maxLength10 = maxLengthCreator(40)

export const LoginForm: React.FC<InjectedFormProps<FormLoginDataType, {captchaUrl?: string}>> = (props) => {
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
            {props.error && <div className={styles.formError}>
                {props.error}
            </div>}
            <div>
                <button className={styles.button}>
                    Login
                </button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormLoginDataType,  {captchaUrl?: string}>({form: 'login'})(LoginForm)

const mapStateToProps = (state: rootReducerType): MapStateToPropsType => {
    return {
        userAuth: state.userAuth.data.isUserAuth,
        captchaUrl: state.userAuth.captchaUrl
    }
}

export const LoginContainer = connect(mapStateToProps, {login})(Login)

////types ////

type FormLoginDataType = {
    login: string
    password: string
    rememberMe: boolean
    captchaUrl?:string
}

type MapStateToPropsType = {
    userAuth: boolean,
    captchaUrl: string
}
