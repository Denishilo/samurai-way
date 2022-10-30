import React from "react";
import styles from './MainContainer.module.css'
import {MainBackground} from "./MainBackground/MainBackground";
import {MainAvatar} from "./MainAvatar/MainAvatar";
import {MainDescription} from "./MainDescription/MainDescription";
import {PostsContainer} from "./PostsContainer/PostsContainer";

export const MainContainer = () => {
    return (
        <div className={styles.main__container}>
            <MainBackground/>
            <MainAvatar/>
            <MainDescription/>
            <PostsContainer/>
        </div>
    )
}