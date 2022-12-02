import React from "react";
import styles from "./Users.module.css";
import user1 from "../../img/users/user1.svg";
import {NavLink} from "react-router-dom";
import {User} from "../../redux/usersReducer";

type UsersPropsType = {
    onPageChanged: (pageNumber: number) => void
    users: User[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followingProgress: Array<string>
    followThunkCreator: (id: string) => any
    unfollowThunkCreator: (id: string) => any
}

export const Users = (props: UsersPropsType) => {
    const {
        totalUsersCount,
        pageSize,
        currentPage,
        users,
        onPageChanged,
        followingProgress,
        followThunkCreator,
        unfollowThunkCreator
    } = props

    console.log(users)
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
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
                    const onClickHandlerUnfollow = () => {
                        unfollowThunkCreator(el.id)
                    }
                    const onClickHandlerFollow = () => {
                        followThunkCreator(el.id)
                    }
                    return (<div key={el.id}>
                        <div className={styles.usersInfo}>
                            <div>
                                <NavLink to={'/profile/' + el.id}>
                                    <img className={styles.userAvatar} src={el.photos.small || user1} alt="user"/>
                                </NavLink>

                            </div>
                            <div>{el.name}</div>
                            <div>
                                <button className={styles.button} disabled={followingProgress.some(id => id === el.id)}
                                        onClick={el.followed ? onClickHandlerUnfollow : onClickHandlerFollow}>{el.followed ? 'Unfollow' : 'Follow'}</button>
                            </div>
                        </div>
                    </div>)
                })}
            </div>
        </div>
    )
}
