import {DialogsPageType, ActionsTypes} from "./store";

const dialogsReducer = (dialogsPage: DialogsPageType, action: ActionsTypes):DialogsPageType  => {
    switch (action.type) {
        case "ADD-MESSAGE":
            let currentText = dialogsPage.newMessageText
            if (currentText) {
                dialogsPage.messages.push({
                    id: dialogsPage.messages.length + 1,
                    message: currentText
                })
                dialogsPage.newMessageText = '';
            }
            return dialogsPage;
        case "CHANGE-NEW-MESSAGE":
            dialogsPage.newMessageText = action.messageText
            return dialogsPage
        default:
            return dialogsPage
    }
}

export default dialogsReducer