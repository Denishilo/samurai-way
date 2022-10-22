import React from "react";
import styles from './MainContainer.module.css'
import {Posts} from "./Posts/Posts";
import {MainBackground} from "./MainBackground/MainBackground";
import {MainAvatar} from "./MainAvatar/MainAvatar";
import {MainDescription} from "./MainDescription/MainDescription";
import {actionDispatchType, PostType} from "../../redux/redux";


type MainContainerTypeProps = {
    mainPages: {
        posts: PostType[]
        newPostText: string
    }
    dispatch: (action: actionDispatchType) => void
}

export const MainContainer = (props: MainContainerTypeProps) => {
    const {dispatch} = props
    const {posts, newPostText} = props.mainPages

    return (
        <div className={styles.main__container}>
            <MainBackground/>
            <MainAvatar/>
            <MainDescription/>
            <Posts posts={posts} dispatch={dispatch} newPostText={newPostText}/>
        </div>
    )
}