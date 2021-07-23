import React from "react";
import {UserType} from "../../types/types";
import userIcon from '../../assets/images/userIcon.png'
import s from "./Users.module.css";
import {NavLink} from "react-router-dom";

export type UsersProps = {
    users: UserType[],
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    setUsers: (users: UserType[]) => void
    setTotalUsersCount: (count: number) => void
    setCurrentPage: (currentPage: number) => void
    onPageChanged: (currentPage: number) => void
    setFetching: (isFetching: boolean) => void
}

function Users(props: UsersProps) {
    const pagesCount = props.totalUsersCount / props.pageSize

    const numPages = []
    for (let i = 1; i <= 10; i++) {
        numPages.push(i)
    }

    const users = props.users.map(u => {
        return <span>
            <div>
                <NavLink to={`/profile/${u.id}`}>
                     <img className={s.img} src={u.photos.small != null ? u.photos.small : userIcon} width="65" height="65"/>
                </NavLink>
            </div>
            <div>
                {u.followed ? <button>Unfollow</button> : <button>Follow</button>}
            </div>
            {u.name}
        </span>
    })

    return (
        <>
            <div>
                {numPages.map(num => <span className={num === props.currentPage ? s.selectedPage : ''}
                                           onClick={() => props.onPageChanged(num)}>{`${num} `}</span>)}
            </div>

            <div>
                {users}
            </div>
        </>
    )
}

export default Users