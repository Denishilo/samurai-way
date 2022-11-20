import React from "react";
import styles from './MainContainer.module.css'
import {MainAvatar} from "./MainAvatar/MainAvatar";
import {MainDescription} from "./MainDescription/MainDescription";
import {PostsContainer} from "./PostsContainer/PostsContainer";
import {MainContainerPropsType} from "./MainContainer";
import {PreLoader} from "../../common/components/PreLoader";

type MainPropsType = {
    state: MainContainerPropsType
}

export const Main = (props: MainPropsType) => {
    const {profile} = props.state
    if (!profile) {
        return <PreLoader/>
    }
    return (
        <div className={styles.mainContainer}>
            <PostsContainer/>
            <div className={styles.myInfo}>
                <MainAvatar avatar={profile.photos.large}/>
                <MainDescription info={profile.aboutMe}
                                 contacts={profile.contacts}
                                 name={profile.fullName}/>
            </div>
        </div>
    )
}