import React from "react";
import styles from './DialogUser.module.css'
import {NavLink} from "react-router-dom";
import {DialogUserTypeProps} from "../../../redux/store";


export const DialogUser = (props: DialogUserTypeProps) => {
    let path = `/dialogs/${props.id}`;
    return (
        <div>
            <div className={styles.dialogs__user}><NavLink to={path}>{props.name}</NavLink></div>
        </div>
    )
}
