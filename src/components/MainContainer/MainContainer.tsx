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

type PathParamType = {
    userId: string
}
type CommonPropsType = RouteComponentProps<PathParamType> & MainContainerPropsType

type MapDispatchToPropsType = {
    addNewPost: () => void,
    changeTextPost: (newText: string) => void,
    mainProfileThunkCreator:(userId:string)=>void
}
export type MainContainerPropsType = MainPageType & MapDispatchToPropsType
export type AllPropsType = MainContainerPropsType & CommonPropsType

export class MainComponent extends React.Component<AllPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.mainProfileThunkCreator(userId)
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
    addNewPost,
    changeTextPost,
    mainProfileThunkCreator
})(WithUrlDataContainerComponent)
