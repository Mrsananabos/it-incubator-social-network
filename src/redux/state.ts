export type StateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
}

export type profilePageType = {
    posts: Array<postType>
}

export type dialogsPageType = {
    dialogs: Array<dialogType>
    messages: Array<messageType>
}

export type postType = {
    id: number
    message: string
    likesCount: number
}

type dialogType = {
    id: number
    name: string
}

type messageType = {
    id: number
    message: string
}


let state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 11},
            {id: 3, message: 'Blabla', likesCount: 11},
            {id: 4, message: 'Dada', likesCount: 11}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrew'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra?'},
            {id: 3, message: 'I like you'},
            {id: 4, message: 'When will we meet?'},
            {id: 5, message: 'Have a nice summer?'}
        ]
    }
}

export default state;