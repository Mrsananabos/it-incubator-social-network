import React from "react";
import {UsersProps} from "./Users";
import axios from "axios";
import userIcon from '../../assets/images/userIcon.png'


class Users extends React.Component<UsersProps> {

    render() {
        debugger
        if (this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => this.props.setUsers(response.data.items))
        }

        const s = this.props.users.map(u => {
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
}

export default Users