import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {AppDispatchType, AppStateType} from "../../../redux/redux-store";
import {addMessageAC, changeNewMessageAC} from "../../../types/dispatchTypes";

const mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsReducer
    }
}

const mapDispatchToProps = (dispatch: AppDispatchType) => {
    return {
        addNewMessage: () => dispatch(addMessageAC()),
        updateNewMessageText: (newMessage: string) => dispatch(changeNewMessageAC(newMessage))
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer