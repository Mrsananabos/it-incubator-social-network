import React from "react";
import Header from "./Header";
import {connect, ConnectedProps} from "react-redux";
import {setAuthUserData} from "../../types/dispatchTypes";
import {AppStateType} from "../../redux/redux-store";
import {usersAPI} from "../../api/api";

class HeaderContainer extends React.Component<HeaderContainerProps> {

    componentDidMount() {
        usersAPI.getAuth()
            .then(response => {
                if (response.resultCode === 0) {
                    let {id, login, email} = response.data
                    this.props.setAuthUserData(id, login, email)
                }
            })
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
    setAuthUserData,
});

type HeaderContainerProps = ConnectedProps<typeof connector>;
export default connector(HeaderContainer);
