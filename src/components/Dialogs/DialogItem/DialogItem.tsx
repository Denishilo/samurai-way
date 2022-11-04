import React from "react";
import styles from './DialogItem.module.css'
import {DialogItemTypeProps} from "../../../redux/message-reducer";

export const DialogItem = (props: DialogItemTypeProps) => {
    return (
        <div className={styles.dialogsItem}>{props.message}</div>
    )
}