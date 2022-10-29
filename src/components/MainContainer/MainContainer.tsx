import React from "react";
import styles from './MainContainer.module.css'
import {MainBackground} from "./MainBackground/MainBackground";
import {MainAvatar} from "./MainAvatar/MainAvatar";
import {MainDescription} from "./MainDescription/MainDescription";
import {actionDispatchType, PostType} from "../../redux/store";
import {PostsContainer} from "./PostsContainer/PostsContainer";

type MainContainerTypeProps = {
    mainPages: {
        posts: PostType[]
        newPostText: string
    }
    dispatch: (action: actionDispatchType) => void
}

export const MainContainer = (props: MainContainerTypeProps) => {
    const {mainPages, dispatch} = props

    return (
        <div className={styles.main__container}>
            <MainBackground/>
            <MainAvatar/>
            <MainDescription/>
            <PostsContainer mainPages={mainPages} dispatch={dispatch}/>
        </div>
    )
}