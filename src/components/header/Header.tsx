import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean,
    login: string
}
function Header(props: HeaderPropsType) {
    return <header className={s.header}>
        <img alt='dd'
             src={"https://s0.rbk.ru/v6_top_pics/media/img/5/31/756020637690315.jpg"}/>
             <div className={s.loginBlock}>
                 <NavLink to={'/login'}>{props.isAuth? props.login : 'Login'}</NavLink>
             </div>
    </header>
}

export default Header;