import React from "react";
import {Main} from "./Main";
import axios from "axios";
import {
    addNewPost,
    changeTextPost,
    mainPageType,
    setUserProfile
} from "../../redux/mainPagePostReducer";
import {rootReducerType} from "../../redux/redux-store";
import {connect} from "react-redux";


type MapDispatchToPropsType = {
    addNewPost: () => void,
    changeTextPost: (newText: string) => void,
    setUserProfile: (profile: any) => void
}
export type MainContainerPropsType = mainPageType & MapDispatchToPropsType

export class MainComponent extends React.Component<MainContainerPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2/`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <Main state={this.props}/>
        )
    }
}

const mapStateToProps = (state: rootReducerType): mainPageType => {
    return {
        posts: state.mainPages.posts,
        newPostText: state.mainPages.newPostText,
        profile: state.mainPages.profile
    }
}

export const MainContainer = connect(mapStateToProps, {setUserProfile, addNewPost, changeTextPost})(MainComponent)
