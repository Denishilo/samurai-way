import React from "react";
import styles from './Navigation.module.css'
import {NavLink} from "react-router-dom";

export const Navigation = () => {
    return (
        <div className={styles.navigation__content}>
            <ul className={styles.navigation__list}>
                <li className={styles.navigation__link}><NavLink to="/profile" activeClassName={styles.active__link}>Profile</NavLink></li>
                <li className={styles.navigation__link}><NavLink to="/dialogs" activeClassName={styles.active__link}>Messages</NavLink></li>
                <li className={styles.navigation__link}><NavLink to="/news" activeClassName={styles.active__link}>News</NavLink></li>
                <li className={styles.navigation__link}><NavLink to="/music" activeClassName={styles.active__link}>Music</NavLink></li>
                <li className={styles.navigation__link}><NavLink to="/settings" activeClassName={styles.active__link}>Settings</NavLink></li>
            </ul>
        </div>
    )
}
