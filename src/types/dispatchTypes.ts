import {ProfileInfoType, UserType} from "./types"

//--------------------------------ProfilePageDataType
export const addPost = (newPost: string) => {
    return {
        type: "ADD-POST",
        newPost
    } as const
}

export const setUserProfile = (profile: ProfileInfoType) => {
    return {
        type: "SET-USER-PROFILE",
        profile
    } as const
}

export const setUserStatus = (status: string) => {
    return {
        type: "SET-USER-STATUS",
        status
    } as const
}

export const setUserId = (userId: string) => {
    return {
        type: "SET-USER-ID",
        userId
    } as const
}

//--------------------------------DialogsPageDataType
export const addNewMessage = (message: string) => {
    return {
        type: "ADD-MESSAGE",
        message
    } as const
}

//--------------------------------UsersPageDataType
export const setUsers = (users: UserType[]) => {
    return {
        type: "SET-USERS",
        items: users
    } as const
}

export const setTotalUsersCount = (count: number) => {
    return {
        type: "SET-TOTAL-USERS-COUNT",
        count
    } as const
}

export const setCurrentPage = (currentPage: number) => {
    return {
        type: "SET-CURRENT_PAGE",
        currentPage
    } as const
}

export const setFetching = (isFetching: boolean) => {
    return {
        type: "SET-FETCHING",
        isFetching
    } as const
}

export const setFollowingInProgress = (followingInProgress: boolean, userId: number) => {
    return {
        type: "SET-FOLLOWING-IN-PROGRESS",
        followingInProgress,
        userId
    } as const
}

export const follow = (userId: number) => {
    return {
        type: "FOLLOW",
        userId
    } as const
}

export const unfollow = (userId: number) => {
    return {
        type: "UNFOLLOW",
        userId
    } as const
}

//--------------------------------------Auth
export const setAuthUserData = (id: number, login: string, email: string, isAuth: boolean) => {
    return {
        type: "SET-USER-DATA",
        data: {
            id,
            login,
            email,
            isAuth
        }
    } as const
}

export type ActionsTypes = ReturnType<typeof addPost>
    | ReturnType<typeof addNewMessage>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setFetching>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setFollowingInProgress>
    | ReturnType<typeof setUserStatus>
    | ReturnType<typeof setUserId>

