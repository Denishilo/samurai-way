import React from "react";
import styles from './Dialogs.module.css'
import {DialogUser} from "./DialogUser/DialogUser";
import {DialogItem} from "./DialogItem/DialogItem";
import {AllDialogsPropsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export const Dialogs = (props: AllDialogsPropsType) => {
    const {dialogsUsers, dialogsMessages,} = props.dialogsPages
    const {onClickAddMessage} = props

    let dialogsUsersElements = dialogsUsers.map(d => <DialogUser key={d.id} name={d.name} id={d.id}/>)
    let dialogsMessagesElements = dialogsMessages.map(m => <DialogItem key={m.id} message={m.message} id={m.id}/>)

    const onSubmit = (formData: DialogsFormDataType) => {
        console.log(formData.message)
        onClickAddMessage(formData.message)
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
                <DialogsReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}

type DialogsFormDataType = {
    message: string
}

const DialogsForm: React.FC<InjectedFormProps<DialogsFormDataType>> = (props) => {
    const {handleSubmit}=props
    return (
        <form onSubmit={handleSubmit} action="#">
            <Field component={'input'}
                   className={styles.textarea}
                   title={'Shift+Enter for send'}
                   placeholder={'Type a new message'}
                   name={'message'}
            />
            <button className={styles.button}>send message</button>
        </form>
    )
}

const DialogsReduxForm = reduxForm<DialogsFormDataType>({form: "dialogs"})(DialogsForm)