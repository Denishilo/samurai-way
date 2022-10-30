import React, {ChangeEvent} from "react";
import styles from './Dialogs.module.css'
import {DialogUser} from "./DialogUser/DialogUser";
import {DialogItem} from "./DialogItem/DialogItem";
import {AllDialogsPropsType} from "./DialogsContainer";

export const Dialogs = (props: AllDialogsPropsType) => {
    const {dialogsUsers, dialogsMessages, newTextMessage} = props.dialogPages
    const {onClickAddMessage, onChangeTextMessage} = props

    let dialogsUsersElements = dialogsUsers.map(d => <DialogUser name={d.name} id={d.id}/>)
    let dialogsMessagesElements = dialogsMessages.map(m => <DialogItem message={m.message} id={m.id}/>)

    const onClickAddMessageHandler = () => {
        onClickAddMessage()
    }

    const onChangeTextMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        onChangeTextMessage(e.currentTarget.value)
    }

    return (
        <div className={styles.dialogs__wrapper}>
            <div className={styles.dialogs__users}>
                {dialogsUsersElements}
            </div>
            <div className={styles.dialogs__messages}>
                {dialogsMessagesElements}
                <textarea onChange={onChangeTextMessageHandler} value={newTextMessage}/>
                <button onClick={onClickAddMessageHandler}>send message</button>
            </div>

        </div>
    )
}