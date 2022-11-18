import React from "react";
import styles from './MainDescription.module.css'
import {ContactsType} from "../../../redux/mainPagePostReducer";

type MainDescriptionPropsType = {
    info: string | null
    contacts: ContactsType
    name: string
}
export const MainDescription = (props: MainDescriptionPropsType) => {
    const {info, contacts, name} = props
    return (
        <div className={styles.mainDescription}>
            <p className={styles.descriptionName}>{name}</p>
            <p className={styles.descriptionLocation}>Minsk, Belarus</p>
            <p>About me: {info}</p>
            <div>
                <h4>Contacts:</h4>
                <ul>
                    <li>vk:{contacts.vk}</li>
                    <li>instagram:{contacts.instagram}</li>
                    <li>facebook:{contacts.facebook}</li>
                </ul>
            </div>
        </div>
    )
}