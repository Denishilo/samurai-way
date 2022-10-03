export type DialogUserTypeProps = {
    name: string
    id: number
}
export type DialogItemTypeProps = {
    id: number
    message: string
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
export let state = {
    dialogsPages: {
        dialogsUsers: <DialogUserTypeProps[]>[
            {id: 1, name: 'Denis'},
            {id: 2, name: 'Kseniya'},
            {id: 3, name: 'Nikita'},
            {id: 4, name: 'Kirill'},
            {id: 5, name: 'Svetlana'},
        ],
        dialogsMessages: <DialogItemTypeProps[]>[
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you\''},
            {id: 3, message: 'Good'},
            {id: 4, message: 'I am study at quarter to 10 p.m.'},
            {id: 5, message: 'Great work'},
        ],
    },
    mainPages: {
        posts: <PostType[]>[
            {id: 1, message: 'Hi! how are you?', likesCount: 1},
            {id: 2, message: 'Im fine, thank you, and you?', likesCount: 4},
        ],
    }
}
