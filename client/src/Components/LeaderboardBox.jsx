import React from "react";

export default function LeaderboardBox({farm}){
    console.log(farm.currency)
    return(
        <div>
            <p>Currency: {farm.currency}</p>
        </div>
    )
}