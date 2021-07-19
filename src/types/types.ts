//--------------------------------ProfilePageDataType
export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageDataType = {
    posts: Array<PostType>
    newPostText: string
    profile: ProfileInfoType | null
}

export type ProfileInfoType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string | null
        large: string | null
    }
}

//--------------------------------DialogsPageDataType
export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

export type DialogsPageDataType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}

//--------------------------------UsersPageDaraType
export type UserType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: {
        small: string | null
        large: string | null
    }
    status: string | null
    followed: boolean
}

export type UsersPageDataType = {
    items: UserType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean
}