import React from "react";
import Header from "./Header";
import {connect, ConnectedProps} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getAuthUserDataTC} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component<HeaderContainerProps> {

    componentDidMount() {
        this.props.getAuthUserDataTC();
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login}/>
    }
}

const mapStateToProps = (state: AppStateType) => {

    return {
        // @ts-ignore
        isAuth: state.authReducer.isAuth,
        // @ts-ignore
        login: state.authReducer.data.login
    }
}

const connector = connect(mapStateToProps, {
    getAuthUserDataTC
});

type HeaderContainerProps = ConnectedProps<typeof connector>;
export default connector(HeaderContainer);
