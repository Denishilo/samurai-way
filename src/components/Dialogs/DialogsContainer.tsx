import React from "react";
import styles from './Dialogs.module.css'
import {
    actionDispatchType,
    DialogItemTypeProps,
    DialogUserTypeProps
} from "../../redux/store";
import {addMessageActionCreatorAC, changeTextMessageAC} from "../../redux/message-reducer";
import {Dialogs} from "./Dialogs";


type DialogsTypeProps = {
    dialogsPages: {
        dialogsUsers: DialogUserTypeProps[]
        dialogsMessages: DialogItemTypeProps[]
        newTextMessage: string
    }
    dispatch: (action: actionDispatchType) => void
}

export const DialogsContainer = (props: DialogsTypeProps) => {
    const {dispatch,dialogsPages} = props

    const onClickAddMessage= () => {
        dispatch(addMessageActionCreatorAC())
    }

    const onChangeTextMessage = (newTextMessage:string) => {
        dispatch(changeTextMessageAC(newTextMessage))
    }

    return (
        <div className={styles.dialogs__wrapper}>
            <Dialogs dialogsPages={dialogsPages}  onClickAddMessage={onClickAddMessage} onChangeTextMessage={onChangeTextMessage}/>
        </div>
    )
}