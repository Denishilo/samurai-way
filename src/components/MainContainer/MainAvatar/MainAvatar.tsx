import React from "react";
import styles from './MainAvatar.module.css'
import avatar from '../../../img/Frame.svg'

export const MainAvatar = () => {
    return (
        <div className={styles.main__avatar}>
            <img src={avatar} alt="avatar" className={styles.mainPhoto}/>
        </div>
    )
}