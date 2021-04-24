import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {dialogsPageType} from "../../../redux/state";

type PropsDialogItem = {
    id: number
    userName: string
}

type PropsMessage = {
    text: string
}

const DialogItem = (props: PropsDialogItem) => {
    const path = '/dialogs/' + props.id
    return <div className={s.item}>
        <NavLink activeClassName={s.active} to={path}>{props.userName}</NavLink>
    </div>
}

const Message = (props: PropsMessage) => {
    return  <div className={s.message}>{props.text}</div>
}




const Dialogs = (state: dialogsPageType) => {
    const getDialogItem = state.dialogs.map(dialog => {
        return <DialogItem id={dialog.id} userName={dialog.name}/>
    })
    const getMessageItem = state.messages.map(message => {
        return  <Message text={message.message}/>
    })

    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {getDialogItem}
        </div>
        <div className={s.messages}>
            {getMessageItem}
        </div>
    </div>
};

export default Dialogs;