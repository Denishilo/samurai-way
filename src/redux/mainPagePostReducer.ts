const ADD_POST = 'ADD-POST';
const CHANGE_TEXT_POST = 'CHANGE-TEXT-POST';

export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type mainPageType = {
    posts: PostType[]
    newPostText: string
}

export type actionDispatchType =
    | ReturnType<typeof addNewPostAC>
    | ReturnType<typeof changeTextPostAC>

const initialState: mainPageType = {
    posts: <PostType[]>[
        {id: 1, message: 'Hello my friends', likesCount: 10},
        {id: 2, message: 'How are you? I\'m study in IT-INCUBATOR!', likesCount: 4},
    ],
    newPostText: '',
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
            // if (action.newText.trim() !== '') {
                return {...state, newPostText: action.newText}
            // }
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