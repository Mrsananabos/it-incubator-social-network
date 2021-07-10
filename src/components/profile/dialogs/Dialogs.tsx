import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {DialogsPageType} from "../../../types/types";
import { ActionsTypes, addMessageAC, changeNewMessageAC } from "../../../types/dispatchTypes";

type PropsDialogItem = {
    id: number
    userName: string
}

type PropsMessage = {
    text: string
}

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: ActionsTypes) => void
}

const DialogItem = (props: PropsDialogItem) => {
    const path = '/dialogs/' + props.id
    return <div className={s.item}>
        <NavLink activeClassName={s.active} to={path}>{props.userName}</NavLink>
    </div>
}

const Message = (props: PropsMessage) => {
    return <div className={s.message}>{props.text}</div>
}

const Dialogs = (props: DialogsPropsType) => {
    function onChangeCurrentMessageHandler(e: ChangeEvent<HTMLTextAreaElement>) {
        props.dispatch(changeNewMessageAC(e.target.value))
    }

    function onClickAddMessageHandler() {
        props.dispatch(addMessageAC())
    }

    const getDialogItem = props.dialogsPage.dialogs.map(dialog => {
        return <DialogItem id={dialog.id} userName={dialog.name}/>
    })
    const getMessageItem = props.dialogsPage.messages.map(message => {
        return <Message text={message.message}/>
    })

    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {getDialogItem}
        </div>
        <div className={s.messages}>
            {getMessageItem}
            <div>
                <textarea value={props.dialogsPage.newMessageText} onChange={onChangeCurrentMessageHandler}
                          placeholder={'Enter your message'}></textarea>
                <div>
                    <button onClick={onClickAddMessageHandler}>Send Message</button>
                </div>
            </div>
        </div>
    </div>
};

export default Dialogs;