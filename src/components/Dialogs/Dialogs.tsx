import React from "react";
import styles from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogUserTypeProps = {
    name: string
    id:number
}

type DialogItemTypeProps = {
    message: string
}

const DialogUser = (props: DialogUserTypeProps) => {
    let path = `/dialogs/${props.id}`;
    return (
        <div>
            <div className={styles.dialogs__user}><NavLink to={path}>{props.name}</NavLink></div>
        </div>
    )
}

const DialogItem = (props: DialogItemTypeProps)=>{
    return (
            <div className={styles.dialogs__item}>{props.message}</div>
    )
}

export const Dialogs = () => {
    return (
        <div className={styles.dialogs__wrapper}>
            <div className={styles.dialogs__users}>
                <DialogUser name={'Denis'} id={1}/>
                <DialogUser name={'Kseniya'} id={2}/>
                <DialogUser name={'Nikita'} id={3}/>
                <DialogUser name={'Kirill'} id={4}/>
                <DialogUser name={'Svetlana'} id={5}/>
            </div>

            <div className={styles.dialogs__messages}>
                <DialogItem message={'Hi'}/>
                <DialogItem message={'How are you'}/>
                <DialogItem message={'Good'}/>
                <DialogItem message={'I am study at quarter to 10 p.m.'}/>
                <DialogItem message={'Great work'}/>

            </div>

        </div>
    )
}