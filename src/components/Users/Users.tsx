import React from "react";
import {AllUsersPropsType} from "./UsersContainer";
import styles from './Users.module.css'
import user1 from '../../img/users/user1.svg'
import axios from "axios";

// export const Users = (props: allUsersPropsType) => {
//     const {users, setUsers, changeFollowStatus} = props
//     if (users.length === 0) {
//         axios.get('https://social-network.samuraijs.com/api/1.0/users')
//             .then(response => {
//                 setUsers(response.data.items)
//             })
//
//          // setUsers([
//         //     {
//         //         id: 1,
//         //         avatar: '',
//         //         followed: false,
//         //         fullName: 'Denis',
//         //         status: 'I am student',
//         //         location: {country: 'Belarus', city: 'Minsk'}
//         //     },
//         //     {
//         //         id: 2,
//         //         avatar: '',
//         //         followed: false,
//         //         fullName: 'Kirill',
//         //         status: 'I am boy',
//         //         location: {country: 'Belarus', city: 'Minsk'}
//         //     },
//         //     {
//         //         id: 3,
//         //         avatar: '',
//         //         followed: true,
//         //         fullName: 'Arina',
//         //         status: 'I am girl',
//         //         location: {country: 'Belarus', city: 'Minsk'}
//         //     },
//         //     {
//         //         id: 4,
//         //         avatar: '',
//         //         followed: false,
//         //         fullName: 'Eugeniu',
//         //         status: 'I am in the USA',
//         //         location: {country: 'USA', city: 'New York'}
//         //     },
//         //     {
//         //         id: 5,
//         //         avatar: '',
//         //         followed: true,
//         //         fullName: 'Ksuysha',
//         //         status: 'I am photographer',
//         //         location: {country: 'Belarus', city: 'Minsk'}
//         //     },
//         //     {
//         //         id: 6,
//         //         avatar: '',
//         //         followed: false,
//         //         fullName: 'Alexandr',
//         //         status: 'Be happy',
//         //         location: {country: 'Ukraine', city: 'Kiev'}
//         //     },
//         //     {
//         //         id: 7,
//         //         avatar: '',
//         //         followed: false,
//         //         fullName: 'Alexandr',
//         //         status: 'Be happy',
//         //         location: {country: 'Belarus', city: 'Brest'}
//         //     },
//         //     {
//         //         id: 8,
//         //         avatar: '',
//         //         followed: false,
//         //         fullName: 'John',
//         //         status: 'I\'m ready',
//         //         location: {country: 'USA', city: 'Los-Angeles'}
//         //     },
//         //     {
//         //         id: 9,
//         //         avatar: '',
//         //         followed: true,
//         //         fullName: 'Maria',
//         //         status: 'Good day!',
//         //         location: {country: 'Belarus', city: 'Grodno'}
//         //     },
//         //     {
//         //         id: 10,
//         //         avatar: '',
//         //         followed: true,
//         //         fullName: 'Karina',
//         //         status: 'Good day!',
//         //         location: {country: 'Belarus', city: 'Mogilev'}
//         //     },
//         // ])
//     }
//
//     const onClickHandler = (id: number) => {
//         changeFollowStatus(id)
//     }
//     return (
//         <div className={styles.usersWrapper}>
//             {users.map(el => {
//                 return (<div key={el.id}>
//                     <div className={styles.usersInfo}>
//                         <div><img className={styles.userAvatar} src={user1} alt="user"/></div>
//                         <div>{el.name}</div>
//                         <div>{"city"},{"country"}</div>
//                         <div>
//                             <button className={styles.button}
//                                     onClick={() => onClickHandler(el.id)}>{el.followed ? 'Unfollow' : 'Follow'}</button>
//                         </div>
//                     </div>
//                 </div>)
//             })}
//             <button>more users</button>
//         </div>
//     )
// }

export class Users extends React.Component<AllUsersPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUserCount(response.data.totalCount)
            })
    }
    getUsers = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.changeCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        let curP = this.props.currentPage;
        let curPF = ((curP - 3) < 0) ? 0 : curP - 3;
        let curPL = curP + 3;
        let slicedPages = pages.slice(curPF, curPL);
        return (
            <div>
                <div className={styles.pages}>
                    {slicedPages.map((el => {
                        return <span onClick={() => this.onPageChanged(el)}
                                     className={this.props.currentPage === el ? `${styles.selectedPage} ${styles.spanPage}` : styles.spanPage}>{el}</span>
                    }))}
                </div>
                <div className={styles.usersWrapper}>
                    {this.props.users.map(el => {
                        const onClickHandler = (id: number) => {
                            this.props.changeFollowStatus(id)
                        }
                        return (<div key={el.id}>
                            <div className={styles.usersInfo}>
                                <div><img className={styles.userAvatar} src={user1} alt="user"/></div>
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
}