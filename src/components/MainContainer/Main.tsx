import React from "react";
import styles from './MainContainer.module.css'
import {MainAvatar} from "./MainAvatar/MainAvatar";
import {MainDescription} from "./MainDescription/MainDescription";
import {PostsContainer} from "./PostsContainer/PostsContainer";
import {MainContainerPropsType} from "./MainContainer";
import {PreLoader} from "../../common/components/PreLoader";
import {Posts} from "./PostsContainer/Posts";
import {addNewPost, changeTextPost} from "../../redux/mainPagePostReducer";

type MainPropsType = {
    state: MainContainerPropsType
}

export const Main = (props: MainPropsType) => {
    const {profile, posts} = props.state
    if (!profile) {
        return <PreLoader/>
    }
    return (
        <div className={styles.mainContainer}>
            {/*<Posts posts={posts} addPostHandler={addNewPost} newPostText={props.state.newPostText} changeTextHandler={(value)=>changeTextPost(value)}/>*/}
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