import {connect} from "react-redux";
import Users from "./UsersClass";
import {AppDispatchType, AppStateType} from "../../redux/redux-store";
import {UserType} from "../../types/types";
import {setCurrentPage, setTotalUsersCountAC, setUsersAC} from "../../types/dispatchTypes";

const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersReducer.items,
        pageSize: state.usersReducer.pageSize,
        totalUsersCount: state.usersReducer.totalUsersCount,
        currentPage: state.usersReducer.currentPage
    }
}

const mapDispatchToProps = (dispatch: AppDispatchType) => {
    return {
        setUsers: (users: UserType[]) => dispatch(setUsersAC(users)),
        setTotalUsersCount: (count: number) => dispatch(setTotalUsersCountAC(count)),
        setCurrentPage: (currentPage: number) => dispatch(setCurrentPage(currentPage))
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;







