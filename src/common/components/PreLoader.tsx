import React from "react";
import styles from "../../components/Users/Users.module.css";
import loader from "../../img/users/loader.svg";

export const PreLoader = () => {
    return (
        <div className={styles.wrapperPreloader}><img className={styles.imgLoader} src={loader} alt={'loader'}/></div>
    )
}