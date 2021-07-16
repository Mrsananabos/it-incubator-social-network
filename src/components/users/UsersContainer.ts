import {connect} from "react-redux";
import Users from "./Users";
import {AppDispatchType, AppStateType} from "../../redux/redux-store";
import {UserType} from "../../types/types";
import {setUsersAC} from "../../types/dispatchTypes";

const mapStateToProps = (state: AppStateType) => {
    return {}
}

const mapDispatchToProps = (dispatch: AppDispatchType) => {
    return {
        setUsers: (users: UserType[]) => dispatch(setUsersAC(users))
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;







