const ADD_POST = 'ADD-POST';
const CHANGE_TEXT_POST = 'CHANGE-TEXT-POST';
const SET_USER_PROFILE = "SET-USER-PROFILE"


export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type mainPageType = {
    posts: PostType[]
    newPostText: string
    profile: null | ProfileInfoType
}

export type SocialType = {
    [key: string]: null | string
}

export type ContactsType = {
    github: SocialType
    mainLink: SocialType
    youtube: SocialType
    facebook: SocialType,
    website: SocialType,
    vk: SocialType,
    twitter: SocialType,
    instagram: SocialType
}
export type PhotoType = {
    small: string
    large: string
}
export type ProfileInfoType = {
    photos: PhotoType
    contacts: ContactsType
    aboutMe: string
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    userId: string
}

export type actionDispatchType =
    | ReturnType<typeof addNewPost>
    | ReturnType<typeof changeTextPost>
    | ReturnType<typeof setUserProfile>

const initialState: mainPageType = {
    posts: <PostType[]>[
        {id: 1, message: 'Hello my friends', likesCount: 10},
        {id: 2, message: 'How are you? I\'m study in IT-INCUBATOR!', likesCount: 4},
    ],
    newPostText: '',
    profile: null,
}
export const mainPagePostReducer = (state: mainPageType = initialState, action: actionDispatchType): mainPageType => {
    switch (action.type) {
        case ADD_POST: {
            if (state.newPostText) {
                const newPost: PostType = {id: 3, message: state.newPostText, likesCount: 0}
                return {...state, posts: [...state.posts, newPost], newPostText: ''}
            }
            return state
        }
        case CHANGE_TEXT_POST:
            return {...state, newPostText: action.newText}
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
        newText,
    } as const
}

export const setUserProfile = (profile: any) => {
    return {
        type: SET_USER_PROFILE,
        payload: {
            profile
        }
    } as const
}