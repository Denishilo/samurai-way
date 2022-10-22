import React, {ChangeEvent, MouseEvent} from "react";
import styles from './Dialogs.module.css'
import {DialogUser} from "./DialogUser/DialogUser";
import {DialogItem} from "./DialogItem/DialogItem";
import {
    actionDispatchType,
    addMessageActionCreator,
    changeTextMessage,
    DialogItemTypeProps,
    DialogUserTypeProps
} from "../../redux/redux";


type DialogsTypeProps = {
    dialogsPages: {
        dialogsUsers: DialogUserTypeProps[]
        dialogsMessages: DialogItemTypeProps[]
        newTextMessage: string
    }
    dispatch: (action: actionDispatchType) => void
}


export const Dialogs = (props: DialogsTypeProps) => {
    const {dispatch} = props

    const {dialogsUsers, dialogsMessages, newTextMessage} = props.dialogsPages


    let dialogsUsersElements = dialogsUsers.map(d => <DialogUser name={d.name} id={d.id}/>)
    let dialogsMessagesElements = dialogsMessages.map(m => <DialogItem message={m.message} id={m.id}/>)

    const onClickAddMessageHandler = () => {
        dispatch(addMessageActionCreator())
    }

    const onChangeTextMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(changeTextMessage(e.currentTarget.value))
    }

    return (
        <div className={styles.dialogs__wrapper}>
            <div className={styles.dialogs__users}>
                {dialogsUsersElements}
            </div>
            <div className={styles.dialogs__messages}>
                {dialogsMessagesElements}
                <textarea onChange={onChangeTextMessage} value={newTextMessage}/>
                <button onClick={onClickAddMessageHandler}>send message</button>
            </div>

        </div>
    )
}