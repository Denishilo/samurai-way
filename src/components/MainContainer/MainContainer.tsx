import React from "react";
import styles from './MainContainer.module.css'
import {Posts} from "./Posts/Posts";
import {MainBackground} from "./MainBackground/MainBackground";
import {MainAvatar} from "./MainAvatar/MainAvatar";
import {MainDescription} from "./MainDescription/MainDescription";
import { PostType } from "../../redux/redux";



type MainContainerTypeProps = {
    posts: PostType[]
}

export const MainContainer = (props: MainContainerTypeProps) => {
    const {posts} = props

    return (
        <div className={styles.main__container}>
            <MainBackground/>
            <MainAvatar/>
            <MainDescription/>
            <Posts posts={posts}/>
        </div>
    )
}