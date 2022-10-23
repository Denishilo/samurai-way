import {actionDispatchType, mainPageType, PostType} from "./redux";

const ADD_POST = 'ADD-POST';
const CHANGE_TEXT_POST = 'CHANGE-TEXT-POST';

export const mainPagePostReducer = (state: mainPageType, action: actionDispatchType) => {
    switch (action.type) {
        case ADD_POST:
            if (state.newPostText) {
                const newPost: PostType = {id: 3, message: state.newPostText, likesCount: 0}
                state.posts = [...state.posts, newPost]
                state.newPostText = ''
            }
            return state
        case CHANGE_TEXT_POST:
            if (action.newText.trim() !== '') {
                state.newPostText = action.newText
            }
            return state
        default:
            return state
    }
}

export const addNewPostAC = () => {
    return {
        type: ADD_POST
    } as const
}

export const changeTextPostAC = (newText: string) => {
    return {
        type: CHANGE_TEXT_POST,
        newText,
    } as const
}