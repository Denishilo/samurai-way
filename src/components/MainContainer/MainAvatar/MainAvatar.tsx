import React from "react";
import styles from './MainAvatar.module.css'

export const MainAvatar = () => {
    return (
        <div className={styles.main__avatar}>
            MyPhoto
            <img src="" alt="" className={styles.main__photo}/>
        </div>
    )
}