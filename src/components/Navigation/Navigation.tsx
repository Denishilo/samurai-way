import React from "react";
import styles from './Navigation.module.css'

export const Navigation = () => {
    return (
        <div className={styles.navigation__content}>
            <ul className={styles.navigation__list}>
                <li className={styles.navigation__link}><a href="src/components/Navigation/Navigation#">Profile</a></li>
                <li className={styles.navigation__link}><a href="src/components/Navigation/Navigation#">Messages</a></li>
                <li className={styles.navigation__link}><a href="src/components/Navigation/Navigation#">News</a></li>
                <li className={styles.navigation__link}><a href="src/components/Navigation/Navigation#">Music</a></li>
                <li className={styles.navigation__link}><a href="src/components/Navigation/Navigation#">Settings</a></li>
            </ul>
        </div>
    )
}
