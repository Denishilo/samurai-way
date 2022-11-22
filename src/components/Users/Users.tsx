import React from "react";
import styles from "./Users.module.css";
import user1 from "../../img/users/user1.svg";
import {NavLink} from "react-router-dom";
import {User} from "../../redux/usersReducer";
import axios from "axios";

type UsersPropsType = {
    onPageChanged: (pageNumber: number) => void
    changeFollowStatus: (id: string) => void
    users: User[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

export const Users = (props: UsersPropsType) => {
    const {totalUsersCount, pageSize, currentPage, users, onPageChanged, changeFollowStatus} = props
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
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {
                                withCredentials: true,
                                headers: {
                                    'API-KEY':'f746c884-1e65-41cc-803b-7578faa18b3d'
                                }
                            })
                                .then(res => {
                                    if(res.data.resultCode===0){
                                        changeFollowStatus(el.id)
                                    }
                                })
                    }

                    const onClickHandlerFollow = () => {
                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {},{
                            withCredentials: true,
                            headers: {
                                'API-KEY':'f746c884-1e65-41cc-803b-7578faa18b3d'
                            }
                        })
                            .then(res => {
                                if(res.data.resultCode===0){
                                    changeFollowStatus(el.id)
                                }
                            })
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
                                <button className={styles.button}
                                        onClick={el.followed ? onClickHandlerUnfollow : onClickHandlerFollow}>{el.followed ? 'Unfollow' : 'Follow'}</button>
                            </div>
                        </div>
                    </div>)
                })}
            </div>
        </div>
    )
}
