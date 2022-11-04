import React from "react";
import styles from './MainDescription.module.css'


export const MainDescription = () => {
    return (
        <div className={styles.mainDescription}>
            <p className={styles.descriptionName}>Denis</p>
            <p className={styles.descriptionLocation}>Minsk, Belarus</p>
        </div>
    )
}