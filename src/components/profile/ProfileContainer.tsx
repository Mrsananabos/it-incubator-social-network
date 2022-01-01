import React, {useEffect} from "react";
import {connect, ConnectedProps} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import Profile from "./Profile";
import {RouteComponentProps, useParams, withRouter} from 'react-router-dom';
import {getUserProfileTC, getUserStatus, updateUserStatus} from "../../redux/profile-reducer";
import {compose} from "redux";

const ProfileContainer = (props: ProfileContainerWithRoutePropsType) => {
   type TypeUserParams = {
       userId: string;
   }

    const userId = useParams<TypeUserParams>().userId;

    useEffect(() => {
        props.getUserProfileTC(userId)
        props.getUserStatus(userId)
    }, [userId])

    return <Profile profile={props.profile} status={props.status} updateStatus={props.updateUserStatus}/>

}
const mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profileReducer.profile,
        status: state.profileReducer.status,
    }
}

type ProfileContainerProps = ConnectedProps<typeof connector>;
type PathParamsType = { userId: string }
type ProfileContainerWithRoutePropsType = RouteComponentProps<PathParamsType> & ProfileContainerProps
const connector = connect(mapStateToProps, {getUserProfileTC, getUserStatus, updateUserStatus})

export default compose<React.ComponentType>(
    connector,
    withRouter
)(ProfileContainer)