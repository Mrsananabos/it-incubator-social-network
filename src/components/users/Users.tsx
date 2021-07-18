import React from "react";
import axios from "axios";
import {UserType} from "../../types/types";
import userIcon from '../../assets/images/userIcon.png'

export type UsersProps = {
    users: UserType[],
    setUsers: (users: UserType[]) => void
}

function Users(props: UsersProps) {
    debugger
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => props.setUsers(response.data.items))
    }

    const s = props.users.map(u => {
        return <span>
            <div>
                <img src={u.photos.small != null ? u.photos.small : userIcon} width="65" height="65"/>
            </div>
            <div>
                {u.followed ? <button>Unfollow</button> : <button>Follow</button>}
            </div>
            {u.name}
        </span>
    })
    return (
        <div>
            {s}
        </div>

    )
}

export default Users