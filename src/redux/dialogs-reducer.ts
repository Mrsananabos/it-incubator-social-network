import {ActionsTypes, DialogsPageType} from "./store";

let dialogsInitialState: DialogsPageType = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'I like you'},
        {id: 4, message: 'When will we meet?'},
        {id: 5, message: 'Have a nice summer?'}
    ],
    newMessageText: ''
}

const dialogsReducer = (dialogsPage: DialogsPageType = dialogsInitialState, action: ActionsTypes):DialogsPageType  => {
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