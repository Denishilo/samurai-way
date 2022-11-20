import React from 'react';
import styles from './Header.module.css'
import logo from '../../img/IMAGE.svg'
import {NavLink} from "react-router-dom";


export const Header = () => {
    return (
        <header className={styles.header}>
                <div className={styles.header__container}>
                    <img className={styles.header__logo_img} src={logo} alt="headerLogo"/>
                    <p className={styles.header__title}></p>
                    <div className={styles.login}>
                        <NavLink to={'/login'}>
                            Login
                        </NavLink>
                    </div>
                </div>

        </header>
    )
}
