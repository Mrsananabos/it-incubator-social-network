import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../common/formsControlls/FormController";
import {requiredField} from "../../utils/validators/validators";
import {connect, ConnectedProps, useSelector} from "react-redux";
import {loginTC} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";
import classes from './Login.module.css'

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

function Login(props: LoginPropsType) {
    const authIndicator = useSelector<AppStateType, boolean>(state => state.authReducer.isAuth)
    const userId = useSelector<AppStateType, number>(state => state.authReducer.data.id)

    if (authIndicator) {
        return <Redirect to={`/profile/${userId}`}/>
    }

    const onSubmit = (formData: FormDataType) => {
        let {login, password, rememberMe} = formData
        props.loginTC(login, password, rememberMe)
    }

    return (
        <div>
            {/*<h1>{authIndicator ? loginString : 'Login'}</h1>*/}
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)

function LoginForm(props: InjectedFormProps<FormDataType>) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'login'} component={Input} validate={[requiredField]}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} type={'password'} component={Input}
                       validate={[requiredField]}/>
            </div>
            <div>
                <Field placeholder={'remember me'} component={Input} name={'rememberMe'} type={'checkbox'}/>Remember me
            </div>
            {props.error
                ? <div className={classes.error}>{props.error}</div>
                : <span></span>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const connector = connect(null, {loginTC})
type LoginPropsType = ConnectedProps<typeof connector>;
export default connector(Login);