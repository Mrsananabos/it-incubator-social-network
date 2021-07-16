import React from "react";
import axios from "axios";
import {UserType} from "../../types/types";

type UsersProps = {
    setUsers: (users: UserType[]) => void
}

const Users = (props: UsersProps) => {
    debugger
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => props.setUsers(response.data.items))
    return <div>

    </div>
}

export default Users