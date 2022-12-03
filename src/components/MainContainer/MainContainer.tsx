import React from "react";
import {Main} from "./Main";
import {
    addNewPost,
    changeTextPost,
    MainPageType, mainProfileThunkCreator,
} from "../../redux/mainPagePostReducer";
import {rootReducerType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {UserDataType} from "../../redux/userAuthReducer";

type PathParamType = {
    userId: string
}
type CommonPropsType = RouteComponentProps<PathParamType> & MainContainerPropsType

type MapDispatchToPropsType = {
    addNewPost: () => void,
    changeTextPost: (newText: string) => void,
    mainProfileThunkCreator: (userId: string) => void
}
type MapStateTypeProps = MainPageType & {
    data: UserDataType
}
export type MainContainerPropsType = MapStateTypeProps & MapDispatchToPropsType
export type AllPropsType = MainContainerPropsType & CommonPropsType

export class MainComponent extends React.Component<AllPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.mainProfileThunkCreator(userId)
    }

    render() {
        if (!this.props.data.isUserAuth) return <Redirect to={'./login'}/>
        return (
            <Main state={this.props}/>
        )
    }
}

const mapStateToProps = (state: rootReducerType): MapStateTypeProps => {
    return {
        posts: state.mainPages.posts,
        newPostText: state.mainPages.newPostText,
        profile: state.mainPages.profile,
        data: state.userAuth.data
    }
}

let WithUrlDataContainerComponent = withRouter(MainComponent)
export const MainContainer = connect(mapStateToProps, {
    addNewPost,
    changeTextPost,
    mainProfileThunkCreator
})(WithUrlDataContainerComponent)
