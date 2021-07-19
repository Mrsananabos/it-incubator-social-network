import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {AppStateType} from "../../../redux/redux-store";
import {addNewMessage, changeNewMessage} from "../../../types/dispatchTypes";

const mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsReducer
    }
}

const DialogsContainer = connect(mapStateToProps, {addNewMessage, changeNewMessage})(Dialogs)

export default DialogsContainer