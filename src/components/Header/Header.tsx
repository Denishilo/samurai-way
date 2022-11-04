import React from 'react';
import styles from './Header.module.css'
import logo from '../../img/IMAGE.svg'

export const Header = () => {
    return (
        <header className={styles.header}>
                <div className={styles.header__container}>
                    <img className={styles.header__logo_img} src={logo} alt="headerLogo"/>
                    <p className={styles.header__title}></p>
                </div>
        </header>
    )
}
