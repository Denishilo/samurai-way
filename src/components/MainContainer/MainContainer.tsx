import React from "react";
import {Main} from "./Main";
import {
    addNewPost, getUserStatusTC,
    MainPageType, mainProfileThunkCreator, updateUserStatusTC,
} from "../../redux/mainPagePostReducer";
import {rootReducerType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../Hoc/withAuthRedirect";
import {compose} from "redux";

type PathParamType = {
    userId: string
}
type CommonPropsType = RouteComponentProps<PathParamType> & MainContainerPropsType

type MapDispatchToPropsType = {
    addNewPost: () => void,
    changeTextPost: (newText: string) => void,
    mainProfileThunkCreator: (userId: string) => void
    getUserStatusTC: (userId: string) => void
    updateUserStatusTC: (status: string) => void
}
type MapStateTypeProps = MainPageType & {
    authorizedUserId: string | null
    isAuth: boolean
}

export type MainContainerPropsType = MapStateTypeProps & MapDispatchToPropsType
export type AllPropsType = MainContainerPropsType & CommonPropsType

export class MainComponent extends React.Component<AllPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId ?? ''
            if (!userId) {
                this.props.history.push('/login')
            }
            //userId = '26482'
        }
        this.props.mainProfileThunkCreator(userId)
        this.props.getUserStatusTC(userId)
        console.log(userId)
    }

    render() {
        return (
            <Main state={this.props}/>
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
    }
}

export const MainContainer = compose<React.ComponentType>(connect(mapStateToProps, {
    addNewPost,
    mainProfileThunkCreator, getUserStatusTC, updateUserStatusTC
}), withRouter, withAuthRedirect)(MainComponent)
