import React from "react";
import styles from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


export const Dialogs = () => {
    return (
        <div className={styles.dialogs__wrapper}>
            <div className={styles.dialogs__users}>
                <div className={styles.dialogs__item}><NavLink to={'/dialogs/1'}>
                    Denis
                </NavLink></div>
                <div className={styles.dialogs__item}><NavLink to={'/dialogs/2'}>
                    Kseniya
                </NavLink></div>
                <div className={styles.dialogs__item}><NavLink to={'/dialogs/3'}>
                    Kirill
                </NavLink></div>
                <div className={styles.dialogs__item}><NavLink to={'/dialogs/4'}>
                    Nikita
                </NavLink></div>
            </div>

            <div className={styles.dialogs__messages}>
                <div className={styles.dialogs__item}>Hi</div>
                <div className={styles.dialogs__item}>How are you?</div>
                <div className={styles.dialogs__item}>YOoo</div>
                <div className={styles.dialogs__item}>See you soon</div>
            </div>

        </div>
    )
}