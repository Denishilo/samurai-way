import {Dispatch} from "redux";
import {mainProfileAPI} from "../api/mainProfileAPI";
import {setUser} from "./userAuthReducer";

const ADD_POST = 'ADD-POST';
const CHANGE_TEXT_POST = 'CHANGE-TEXT-POST';
const SET_USER_PROFILE = "SET-USER-PROFILE"

export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type MainPageType = {
    posts: PostType[]
    newPostText: string
    profile: null | ProfileType
}

type Socials = 'github' | 'mainLink' | 'youtube' | 'facebook' | 'website' | 'vk' | 'twitter' | 'instagram'

export type ContactsType = Record<Socials, string | null>

export type PhotoType = {
    small: string
    large: string
}

export type ProfileType = {
    aboutMe: null | string
    "contacts": ContactsType
    "lookingForAJob": boolean,
    "lookingForAJobDescription": null | string,
    "fullName": string,
    "userId": string,
    "photos": PhotoType
}

export type actionDispatchType =
    | ReturnType<typeof addNewPost>
    | ReturnType<typeof changeTextPost>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setUser>

const initialState: MainPageType = {
    posts: <PostType[]>[
        {id: 1, message: 'Hello my friends', likesCount: 10},
        {id: 2, message: 'How are you? I\'m study in IT-INCUBATOR!', likesCount: 4},
    ],
    newPostText: '',
    profile: null,
}
export const mainPagePostReducer = (state: MainPageType = initialState, action: actionDispatchType): MainPageType => {
    switch (action.type) {
        case ADD_POST: {
            if (state.newPostText) {
                const newPost: PostType = {id: 3, message: state.newPostText, likesCount: 0}
                return {...state, posts: [...state.posts, newPost], newPostText: ''}
            }
            return state
        }
        case CHANGE_TEXT_POST:
            return {...state, newPostText: action.payload.newText}
        case SET_USER_PROFILE:
            return {...state, profile: action.payload.profile}
        default:
            return state
    }
}

export const addNewPost = () => {
    return {
        type: ADD_POST
    } as const
}

export const changeTextPost = (newText: string) => {
    return {
        type: CHANGE_TEXT_POST,
        payload: {
            newText
        }
    } as const
}

const setUserProfile = (profile: ProfileType) => {
    return {
        type: SET_USER_PROFILE,
        payload: {
            profile
        }
    } as const
}

export const mainProfileThunkCreator = (userId: string) => (dispatch: Dispatch) => {
    mainProfileAPI.getProfile(userId)
        .then(response => {
            console.log(response)
            dispatch(setUserProfile(response.data))
        })
}