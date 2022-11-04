import React, {ChangeEvent} from "react";
import styles from './Dialogs.module.css'
import {DialogUser} from "./DialogUser/DialogUser";
import {DialogItem} from "./DialogItem/DialogItem";
import {AllDialogsPropsType} from "./DialogsContainer";

export const Dialogs = (props: AllDialogsPropsType) => {
    const {dialogsUsers, dialogsMessages, newTextMessage} = props.dialogsPages
    const {onClickAddMessage, onChangeTextMessage} = props

    let dialogsUsersElements = dialogsUsers.map(d => <DialogUser key={d.id} name={d.name} id={d.id}/>)
    let dialogsMessagesElements = dialogsMessages.map(m => <DialogItem key={m.id} message={m.message} id={m.id}/>)

    const onClickAddMessageHandler = () => {
        onClickAddMessage()
    }

    const onChangeTextMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        onChangeTextMessage(e.currentTarget.value)
    }

    return (
        <div className={styles.dialogs__wrapper}>

            <div className={styles.dialogsContent}>
                <div className={styles.dialogs__users}>
                    {dialogsUsersElements}
                </div>
                <div className={styles.dialogs__messages}>
                    {dialogsMessagesElements}
                </div>
            </div>
            <div className={styles.sendForm}>
                <textarea
                    className={styles.textarea}
                    title={'Shift+Enter for send'}
                    placeholder={'Type a new message'}
                    value={newTextMessage}
                    onChange={onChangeTextMessageHandler}
                />
                <button className={styles.button} onClick={onClickAddMessageHandler}>send message</button>
            </div>
        </div>
    )
}