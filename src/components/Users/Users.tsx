import React from "react";
import {allUsersPropsType} from "./UsersContainer";

export const Users = (props:allUsersPropsType) => {

    const {users,follow,unFollow, setUsers} = props

    if(users.length === 0){
        setUsers([
            {id:1,avatar:'',followed:false, fullName: 'Denis', status: 'I am student', location:{country:'Belarus', city:'Minsk'}},
            {id:2,avatar:'',followed:false,fullName: 'Kirill', status: 'I am boy', location:{country:'Belarus', city:'Minsk'}},
            {id:3,avatar:'',followed:true,fullName: 'Arina', status: 'I am girl', location:{country:'Belarus', city:'Minsk'}},
            {id:4,avatar:'',followed:false,fullName: 'Eugeniu', status: 'I am in the USA', location:{country:'USA', city:'New York'}},
            {id:5,avatar:'',followed:true,fullName: 'Ksuysha', status: 'I am photographer', location:{country:'Belarus', city:'Minsk'}},
            {id:6,avatar:'',followed:false,fullName: 'Alexandr', status: 'Be happy', location:{country:'Ukraine', city:'Kiev'}},
        ])
    }

    const onClickFollowHandler = (id:number)=>{
       follow(id)
    }

    const onClickUnfollowHandler = (id:number)=>{
        unFollow(id)
    }
    return (
        <>
            {users.map(el=> {
                return (<div key={el.id}>
                    <span><div>img</div></span>
                    <div>
                        {el.followed
                            ? <button onClick={()=>onClickFollowHandler(el.id)}>Follow</button>
                            : <button onClick={()=>onClickUnfollowHandler(el.id)}>Unfollow</button>}
                    </div>
                    {el.fullName}
                </div>)
            })}
        </>
    )
}