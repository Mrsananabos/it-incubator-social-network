import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

type PropsDialogItem = {
    id: string
    userName: string
}

type PropsMessage = {
    text: string
}

const DialogItem = (props: PropsDialogItem) => {
    const path = '/dialogs/' + props.id
    return <div className={s.item + ' ' + s.active}>
        <NavLink to={path}>{props.userName}</NavLink>
    </div>
}

const Message = (props: PropsMessage) => {
    return  <div className={s.message}>{props.text}</div>
}

function Dialogs() {
    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            <DialogItem id={'1'} userName={'Dmitriy'}/>
            <DialogItem id={'2'} userName={'Petka'}/>
            <DialogItem id={'3'} userName={'Kisa'}/>
        </div>
        <div className={s.messages}>
            <Message text={'Hi'}/>
            <Message text={'How are you?'}/>
            <Message text={'You like me'}/>
        </div>
    </div>
}

export default Dialogs;