import React from "react";
import styles from './MainAvatar.module.css'
import avatar from '../../../img/Frame.svg'

type MainAvatarPropsType = {
    avatar:string
}

export const MainAvatar = (props:MainAvatarPropsType) => {
    return (
        <div className={styles.main__avatar}>
            <img src={props.avatar ? props.avatar : avatar} alt="avatar" className={styles.mainPhoto}/>
        </div>
    )
}