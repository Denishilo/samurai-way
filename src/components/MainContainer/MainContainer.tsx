import React from "react";
import {Main} from "./Main";
import axios from "axios";
import {
    addNewPost,
    changeTextPost,
    MainPageType, ProfileType,
    setUserProfile
} from "../../redux/mainPagePostReducer";
import {rootReducerType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {mainProfileAPI} from "../../api/mainProfileAPI";

type PathParamType = {
    userId: string
}
type CommonPropsType = RouteComponentProps<PathParamType> & MainContainerPropsType

type MapDispatchToPropsType = {
    addNewPost: () => void,
    changeTextPost: (newText: string) => void,
    setUserProfile: (profile: ProfileType) => void
}
export type MainContainerPropsType = MainPageType & MapDispatchToPropsType
export type AllPropsType = MainContainerPropsType & CommonPropsType


export class MainComponent extends React.Component<AllPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        // mainProfileThunkCreator(userId)
        //mainProfileAPI.getProfile(userId)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId ? userId : '2'}`)
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

const mapStateToProps = (state: rootReducerType): MainPageType => {
    return {
        posts: state.mainPages.posts,
        newPostText: state.mainPages.newPostText,
        profile: state.mainPages.profile
    }
}

let WithUrlDataContainerComponent = withRouter(MainComponent)
export const MainContainer = connect(mapStateToProps, {
    setUserProfile,
    addNewPost,
    changeTextPost
})(WithUrlDataContainerComponent)
