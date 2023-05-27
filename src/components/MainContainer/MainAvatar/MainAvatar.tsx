import React, {ChangeEvent, FC} from "react";
import styles from './MainAvatar.module.css'
import avatarDefault from '../../../img/Frame.svg'

export const MainAvatar: FC<Props> = ({savePhoto, avatar, isOwner}) => {
    const changePhotoAvatar = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            savePhoto(e.target.files[0])
        }
    }
    return (
        <div className={styles.wrapper}>
            <label htmlFor='fileField'>
                <img src={avatar ? avatar : avatarDefault} alt="avatar" className={styles.mainPhoto}/>
                {isOwner && <input id='fileField' type={"file"} onChange={changePhotoAvatar} className={styles.input}/>}
            </label>
        </div>
    )
}

///// types////
type Props = {
    avatar?: string
    savePhoto: (photo: File) => void
    isOwner: boolean
}