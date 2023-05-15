import React from "react";
import styles from './Navigation.module.css'
import {NavLink} from "react-router-dom";
import logoSettings from '../../img/navigation/settings.svg'
import profile from '../../img/navigation/User.svg'
import messages from '../../img/navigation/Mail.svg'
import users from '../../img/navigation/Users.svg'

export const Navigation = () => {
    return (
        <div className={styles.navigation__content}>
            <div className={styles.navigation__list}>
                <div className={styles.navigation__link}>
                    <NavLink to="/profile" activeClassName={styles.active__link}>
                    <img className={styles.imgNavigation} src={profile} alt="profile"/>Profile</NavLink></div>
                <div className={styles.navigation__link}>
                    <NavLink to="/dialogs" activeClassName={styles.active__link}>
                    <img className={styles.imgNavigation} src={messages} alt="Messages"/>Messages</NavLink></div>
                <div className={styles.navigation__link}>
                    <NavLink to="/users" activeClassName={styles.active__link}>
                    <img className={styles.imgNavigation} src={users} alt="users"/>Users</NavLink></div>
                <div className={styles.navigation__link}>
                    <NavLink to="/settings" activeClassName={styles.active__link}><img className={styles.imgNavigation}
                    src={logoSettings} alt="settings"/>Settings</NavLink></div>
            </div>
        </div>
    )
}
