import React from "react";
import styles from './MainContainer.module.css'

import {MainAvatar} from "./MainAvatar/MainAvatar";
import {MainDescription} from "./MainDescription/MainDescription";
import {PostsContainer} from "./PostsContainer/PostsContainer";


export const MainContainer = () => {
    return (
        <div className={styles.mainContainer}>
            <PostsContainer/>
            <div className={styles.myInfo}>
                <MainAvatar/>
                <MainDescription/>
            </div>


        </div>
    )
}