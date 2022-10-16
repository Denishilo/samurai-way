import React from "react";
import styles from './MainContainer.module.css'
import {Posts} from "./Posts/Posts";
import {MainBackground} from "./MainBackground/MainBackground";
import {MainAvatar} from "./MainAvatar/MainAvatar";
import {MainDescription} from "./MainDescription/MainDescription";
import {PostType} from "../../redux/redux";


type MainContainerTypeProps = {
    mainPages: {
        posts: PostType[]
        newPostText: string
    }
    addPost: () => void
    updateNewPostText: (newText: string) => void

}

export const MainContainer = (props: MainContainerTypeProps) => {
    const { addPost,updateNewPostText} = props
    const {posts, newPostText} = props.mainPages

    return (
        <div className={styles.main__container}>
            <MainBackground/>
            <MainAvatar/>
            <MainDescription/>
            <Posts posts={posts} addPost={addPost} newPostText={newPostText} updateNewPostText={updateNewPostText}/>
        </div>
    )
}