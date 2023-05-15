import React from 'react';
import styles from './Header.module.css'
import logo from '../../img/IMAGE.svg'
import {NavLink} from "react-router-dom";
import {AllPropsType} from "./HeaderContainer";

type HeaderTypeProps = {
    data: AllPropsType
}
export const Header = (props: HeaderTypeProps) => {
    const {login, isUserAuth} = props.data.data
    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <img className={styles.header__logo_img} src={logo} alt="headerLogo"/>
                <p className={styles.header__title}></p>
                <div className={styles.login}>
                    {isUserAuth
                        ? <div className={styles.log}>{login}
                            <button onClick={props.data.logout}>Log out</button>
                        </div>
                        : <div className={styles.login}>
                            Login
                            <NavLink to={'/login'}></NavLink>
                        </div>}
                </div>
            </div>

        </header>
    )
}
