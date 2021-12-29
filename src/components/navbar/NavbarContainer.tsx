import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {AuthType} from "../../types/types";

function NavbarContainer(props: PropsType) {
    return <nav className={s.nav}>
        <div className={s.item}><NavLink to={`/profile/${props.userId}`} activeClassName={s.active}>Profile</NavLink>
        </div>
        <div className={s.item}><NavLink to={'/dialogs'} activeClassName={s.active}>Messages</NavLink></div>
        <div className={s.item}><NavLink to={'/users'} activeClassName={s.active}>Users</NavLink></div>
        <div className={s.item}><a>News</a></div>
        <div className={s.item}><a>Music</a></div>
        <div className={s.item}><a>Settings</a></div>
    </nav>
}

const mapStateToProps = (state: AppStateType) => {
    const authReducer: AuthType = state.authReducer;
    return {
        userId: authReducer.data.id
    } as const
}

type PropsType = ReturnType<typeof mapStateToProps>
export default connect(mapStateToProps, {})(NavbarContainer)
