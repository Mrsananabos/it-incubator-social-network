import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {AppStateType} from "../../../redux/redux-store";
import {addNewMessage, changeNewMessage} from "../../../types/dispatchTypes";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";
import React from "react";
import {withRouter} from "react-router-dom";

const mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsReducer
    }
}

const connector = connect(mapStateToProps, {addNewMessage, changeNewMessage})

export default compose<React.ComponentType>(
    connector,
    withRouter,
    withAuthRedirect)(Dialogs)