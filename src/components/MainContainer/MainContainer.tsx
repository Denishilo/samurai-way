import React from "react";
import {Main} from "./Main";
import {
    addNewPost,
    changeTextPost,
    MainPageType, mainProfileThunkCreator,
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
}
type MapStateTypeProps = MainPageType

export type MainContainerPropsType = MapStateTypeProps & MapDispatchToPropsType
export type AllPropsType = MainContainerPropsType & CommonPropsType

export class MainComponent extends React.Component<AllPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            console.log('aaaaa')
            userId = '2'
        }
        this.props.mainProfileThunkCreator(userId)
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
        newPostText: state.mainPages.newPostText,
        profile: state.mainPages.profile,
    }
}

export const MainContainer = compose<React.ComponentType>(connect(mapStateToProps, {
    addNewPost,
    changeTextPost,
    mainProfileThunkCreator
}),withRouter,withAuthRedirect)(MainComponent)
