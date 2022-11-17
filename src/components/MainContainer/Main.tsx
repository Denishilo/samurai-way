import React from "react";
import styles from './MainContainer.module.css'

import {MainAvatar} from "./MainAvatar/MainAvatar";
import {MainDescription} from "./MainDescription/MainDescription";
import {PostsContainer} from "./PostsContainer/PostsContainer";
import {MainContainerPropsType} from "./MainContainer";

type MainPropsType = {
    state: MainContainerPropsType
}

export const Main = (props: MainPropsType) => {
    const {profile} = props.state
    return (
        <div className={styles.mainContainer}>
            <PostsContainer/>
            <div className={styles.myInfo}>
                <MainAvatar avatar={profile ? profile.photos.large : ''}/>
                <MainDescription info={profile ? profile.aboutMe : ''}
                                 contacts={profile ? profile.contacts : ''}
                                 name={profile ? profile.fullName : ''}/>
            </div>
        </div>
    )
}