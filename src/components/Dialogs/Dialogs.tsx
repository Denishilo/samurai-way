import React, {memo} from "react";
import styles from './Dialogs.module.css'
import {DialogUser} from "./DialogUser/DialogUser";
import {DialogItem} from "./DialogItem/DialogItem";
import {AllDialogsPropsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "utilites/validator/validator";
import {Input} from "components/FormsControls/Input";

export const Dialogs = memo((props: AllDialogsPropsType) => {
    const {dialogsUsers, dialogsMessages,} = props.dialogsPages
    const {onClickAddMessage} = props

    let dialogsUsersElements = dialogsUsers.map(d => <DialogUser key={d.id} name={d.name} id={d.id}/>)
    let dialogsMessagesElements = dialogsMessages.map(m => <DialogItem key={m.id} message={m.message} id={m.id}/>)

    const onSubmit = (formData: DialogsFormDataType) => {
        onClickAddMessage(formData.message)
    }

    return (
        <>
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
        </>
    )
})

const maxLength50 = maxLengthCreator(500)

const DialogsForm: React.FC<InjectedFormProps<DialogsFormDataType>> = memo((props) => {
    const {handleSubmit} = props

    return (
        <form className={styles.sendForm} onSubmit={handleSubmit} action="#">
            <Field component={Input}
                   className={styles.textarea}
                   placeholder={'Type a new message'}
                   name={'message'}
                   validate={[requiredField, maxLength50]}
            />
            <button className={styles.button}>send message</button>
        </form>
    )
})

const DialogsReduxForm = reduxForm<DialogsFormDataType>({form: "dialogs"})(DialogsForm)

///// types
type DialogsFormDataType = {
    message: string
}