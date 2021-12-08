import React from "react";


export default function LeaderBoard({user}){
    console.log(user.farms)

    return(
        <div>
            <h4>{user.username}</h4>
            <p>{user.farms[0].currency}</p>
        </div>
    )
}