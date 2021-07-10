export type StateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
}

export type profilePageType = {
    posts: Array<postType>
    newPostText: string
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

export type StoreType = {
    _state: StateType,
    getState: () => StateType
    subscribe: (state: any) => void
    addNewPost: () => void
    updateNewPostText: (newPostText: string) => void
    _callSubscriber: () => void
}


let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11},
                {id: 3, message: 'Blabla', likesCount: 11},
                {id: 4, message: 'Dada', likesCount: 11}
            ],
            newPostText: ''
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
    },
    getState() {
        debugger
        return this._state
    },
    subscribe(observer) {
        debugger
        this._callSubscriber = observer;
    },
    addNewPost() {
        let currentText = this._state.profilePage.newPostText
        if (currentText) {
            this._state.profilePage.posts.push({
                id: this._state.profilePage.posts.length + 1,
                message: currentText,
                likesCount: 0
            })
            this._state.profilePage.newPostText = '';
        }
        this._callSubscriber();
    },
    updateNewPostText(newPostText: string) {
        debugger
        this._state.profilePage.newPostText = newPostText
        this._callSubscriber()
    },
    _callSubscriber() {
        console.log('rerender');
    }
}

export default store;
(window as any).store = store;