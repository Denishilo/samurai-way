import React from "react";
import styles from './MainContainer.module.css'
import {MainAvatar} from "./MainAvatar/MainAvatar";
import {MainDescription} from "./MainDescription/MainDescription";
import {PostsContainer} from "./PostsContainer/PostsContainer";
import {MainContainerPropsType} from "./MainContainer";
import {PreLoader} from "common/components/PreLoader";
import {Status} from "./Status/Status";


type MainPropsType = {
    state: MainContainerPropsType,
    isOwner: boolean
}

export const Main = (props: MainPropsType) => {
    const {profile, status, updateUserStatusTC, updateAvatarPhoto} = props.state

    const {isOwner} = props
    if (!profile) {
        return <PreLoader/>
    }
    const savePhoto = (photo: File) => {
        updateAvatarPhoto(photo)
    }
    return (
        <div className={styles.mainContainer}>
            <PostsContainer/>
            <div className={styles.myInfo}>
                <MainAvatar avatar={profile.photos?.small} savePhoto={savePhoto} isOwner={isOwner}/>
                <Status status={status} updateUserStatusTC={updateUserStatusTC} userId={profile.userId} />
                <MainDescription info={profile.aboutMe}
                                 contacts={profile.contacts}
                                 name={profile.fullName}
                                 />
            </div>
        </div>
    )
}