import React from "react";
import {Main} from "./Main";
import {
    addNewPost, getUserStatusTC,
    MainPageType, mainProfileThunkCreator, updateAvatarPhoto, updateUserStatusTC,
} from "redux/mainPagePostReducer";
import {rootReducerType} from "redux/redux-store";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../Hoc/withAuthRedirect";
import {compose} from "redux";

export class MainComponent extends React.Component<AllPropsType> {
    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId ?? ''
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.mainProfileThunkCreator(userId)
        this.props.getUserStatusTC(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<AllPropsType>, prevState: Readonly<{}>) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <Main state={this.props} isOwner={!this.props.match.params.userId}/>
        )
    }
}

const mapStateToProps = (state: rootReducerType): MapStateTypeProps => {
    return {
        posts: state.mainPages.posts,
        profile: state.mainPages.profile,
        status: state.mainPages.status,
        authorizedUserId: state.userAuth.data.id,
        isAuth: state.userAuth.data.isUserAuth,
        userId: state.userAuth.data.id
    }
}

export const MainContainer = compose<React.ComponentType>(connect(mapStateToProps, {
    addNewPost,
    mainProfileThunkCreator, getUserStatusTC, updateUserStatusTC, updateAvatarPhoto
}), withRouter, withAuthRedirect)(MainComponent)

///// types /////////

type PathParamType = {
    userId: string
}
type CommonPropsType = RouteComponentProps<PathParamType> & MainContainerPropsType

type MapDispatchToPropsType = {
    addNewPost: () => void,
    changeTextPost: (newText: string) => void,
    mainProfileThunkCreator: (userId: string) => void
    getUserStatusTC: (userId: string) => void
    updateUserStatusTC: (status: string, userId: string) => void
    updateAvatarPhoto: (photo: File) => void
}
type MapStateTypeProps = MainPageType & {
    authorizedUserId: string | null
    isAuth: boolean
    userId: string | null
}

export type MainContainerPropsType = MapStateTypeProps & MapDispatchToPropsType
export type AllPropsType = MainContainerPropsType & CommonPropsType