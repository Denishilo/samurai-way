import React from "react";
import styles from "./Users.module.css";
import user1 from "../../img/users/user1.svg";
import { UserType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    onPageChanged:(pageNumber: number)=>void
    changeFollowStatus:(id:number)=>void
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

export const Users =(props:UsersPropsType)=>{
    const {totalUsersCount, pageSize, currentPage, users,onPageChanged, changeFollowStatus } = props

    let pagesCount = Math.ceil(totalUsersCount /pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let curP = currentPage;
    let curPF = ((curP - 3) < 0) ? 0 : curP - 3;
    let curPL = curP + 3;
    let slicedPages = pages.slice(curPF, curPL);

    return (
        <div>
            <div className={styles.pages}>
                {slicedPages.map((el => {
                    return <span onClick={() => onPageChanged(el)} key={el}
                                 className={currentPage === el ? `${styles.selectedPage} ${styles.spanPage}` : styles.spanPage}>{el}</span>
                }))}
            </div>
            <div className={styles.usersWrapper}>
                {users.map(el => {
                    const onClickHandler = (id: number) => {
                       changeFollowStatus(id)
                    }
                    return (<div key={el.id}>
                        <div className={styles.usersInfo}>
                            <div>
                                <NavLink to={'/profile/' + el.id}>
                                    <img className={styles.userAvatar} src={user1} alt="user"/>
                                </NavLink>

                            </div>
                            <div>{el.name}</div>
                            <div>{"city"},{"country"}</div>
                            <div>
                                <button className={styles.button}
                                        onClick={() => onClickHandler(el.id)}>{el.followed ? 'Unfollow' : 'Follow'}</button>
                            </div>
                        </div>
                    </div>)
                })}
            </div>
        </div>
    )
}