import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../redux/redux-store";

type MapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        // @ts-ignore
        isAuth: state.authReducer.isAuth
    }
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: MapStateToPropsType) => {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to={'/login'}/>
        return <Component {...restProps as T}/>
    }

    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)

    return ConnectedRedirectComponent;

}