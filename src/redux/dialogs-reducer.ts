import {ActionsTypes} from "../types/dispatchTypes";
import {DialogsPageType, MessageType} from "../types/types";

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

const dialogsReducer = (dialogsPage: DialogsPageType = dialogsInitialState, action: ActionsTypes): DialogsPageType => {
    switch (action.type) {
        case "ADD-MESSAGE":
            if (dialogsPage.newMessageText.trim() !== '') {
                const newMessage: MessageType = {
                    id: dialogsPage.dialogs.length + 1,
                    message: dialogsPage.newMessageText
                }
                return {
                    ...dialogsPage,
                    messages: [...dialogsPage.messages, newMessage],
                    newMessageText: ''
                }
            } else {
                return dialogsPage;
            }
        case "CHANGE-NEW-MESSAGE":
            return {...dialogsPage, newMessageText: action.messageText}
        default:
            return dialogsPage
    }
}

export default dialogsReducer