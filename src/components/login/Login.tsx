import React from 'react';
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {reduxForm, Field, InjectedFormProps} from "redux-form";

type FormDataType = {
    login: string
    password: string
    rememberMe: string
}
export function Login() {
    //
    // const authIndicator = useSelector<AppStateType, boolean>(state => state.authData.isAuth)
    // const loginString = useSelector<AppStateType, string>(state => state.authData.data.login)

    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
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
                <Field placeholder={'Login'} name={'login'} component={'input'}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={'input'}/>
            </div>
            <div>
                <Field placeholder={'remember me'} component={'input'} name={'rememberMe'} type={'checkbox'}/>remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}