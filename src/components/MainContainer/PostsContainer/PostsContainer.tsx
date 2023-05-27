import React from "react";
import {addNewPost, MainPageType} from "redux/mainPagePostReducer";
import {Posts} from "./Posts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {rootReducerType} from "redux/redux-store";

let mapStateToProps = (state: rootReducerType): MapStatePropsType => {
    return {
        mainPages: state.mainPages
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPostHandler: (newPost: string) => {
            dispatch(addNewPost(newPost))
        },
    }
}

export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

///// types //////

type MapStatePropsType = {
    mainPages: MainPageType
}

type MapDispatchPropsType = {
    addPostHandler: (newPost: string) => void
}

export type AllPostsPropsType = MapStatePropsType & MapDispatchPropsType