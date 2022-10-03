import React from "react";
import styles from './DialogItem.module.css'
import {DialogItemTypeProps} from "../../../redux/redux";

export const DialogItem = (props: DialogItemTypeProps) => {
    return (
        <div className={styles.dialogs__item}>{props.message}</div>
    )
}