import React from "react";
import styles from './MainDescription.module.css'
import {ContactsType} from "redux/mainPagePostReducer";

type MainDescriptionPropsType = {
    info?: string | null
    contacts?: ContactsType
    name?: string
}

export const MainDescription = (props: MainDescriptionPropsType) => {
    const {info, name, contacts} = props
    return (
        <>
            <div className={styles.mainDescription}>
                <p className={styles.descriptionName}>{name}</p>
                <p className={styles.descriptionLocation}>Minsk, Belarus</p>
                {contacts && <p>About me: {info}</p>}
            </div>
        </>

    )
}