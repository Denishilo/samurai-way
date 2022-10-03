import React from "react";
import styles from './Dialogs.module.css'
import {DialogUser} from "./DialogUser/DialogUser";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogItemTypeProps, DialogUserTypeProps} from "../../redux/redux";



type DialogsTypeProps = {
    dialogsUsers: DialogUserTypeProps[]
    dialogsMessages: DialogItemTypeProps[]
}

export const Dialogs = (props: DialogsTypeProps) => {
    const {dialogsUsers, dialogsMessages} = props

    let dialogsUsersElements = dialogsUsers.map(d => <DialogUser name={d.name} id={d.id}/>)
    let dialogsMessagesElements = dialogsMessages.map(m => <DialogItem message={m.message} id={m.id}/>)

    return (
        <div className={styles.dialogs__wrapper}>
            <div className={styles.dialogs__users}>
                {dialogsUsersElements}
            </div>
            <div className={styles.dialogs__messages}>
                {dialogsMessagesElements}
            </div>

        </div>
    )
}