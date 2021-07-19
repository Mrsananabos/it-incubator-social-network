import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../types/dispatchTypes";
import {AppStateType} from "../../redux/redux-store";
import {ProfileInfoType} from "../../types/types";
import Profile from "./Profile";

type ProfileContainerProps = {
    profile: ProfileInfoType | null,
    setUserProfile: (profile: ProfileInfoType) => void
}

class ProfileContainer extends React.Component<ProfileContainerProps> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return <Profile profile={this.props.profile}/>
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profileReducer.profile
    }
}

const connector = connect(mapStateToProps, {setUserProfile})
export default connector(ProfileContainer)