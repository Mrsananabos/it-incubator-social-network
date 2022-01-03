import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {DialogsPageDataType} from "../../../types/types";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {TextArea} from "../../../common/formsControlls/FormController";
import {maxFieldLength30, requiredField} from "../../../utils/validators/validators";

type PropsDialogItem = {
    id: number
    userName: string
}

type PropsMessage = {
    text: string
}

type DialogsPropsType = {
    dialogsPage: DialogsPageDataType
    addNewMessage: (message: string) => void
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

    const getDialogItem = props.dialogsPage.dialogs.map(dialog => {
        return <DialogItem id={dialog.id} userName={dialog.name}/>
    })
    const getMessageItem = props.dialogsPage.messages.map(message => {
        return <Message text={message.message}/>
    })
    const addNewMessage = (values: DialogsNewMessageFormType) => {
        props.addNewMessage(values.newMessageBody)
    }

    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {getDialogItem}
        </div>
        <div className={s.messages}>
            {getMessageItem}
            <div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    </div>}

    type DialogsNewMessageFormType = {
        newMessageBody: string
    }
    const AddMessageFormRedux = reduxForm<DialogsNewMessageFormType>({
        form: 'dialogAddMessage'
    })(AddMessageForm)

    function AddMessageForm(props: InjectedFormProps<DialogsNewMessageFormType>) {
        return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={TextArea} name={"newMessageBody"} placeholder={"type your message"} validate={[requiredField, maxFieldLength30]}/>
                </div>
                <div>
                    <button>Send</button>
                </div>
            </form>
        )
    }

export default Dialogs;