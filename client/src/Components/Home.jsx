import {useEffect, useState, React} from "react";
import Farm from "./Farm";
import { Route, Routes } from "react-router";


export default function Home({farm, setFarmData, farmData, setUser, user}){


    return(
        <div>
            <Routes>
                <Route  path="/" element={<Farm farm={farm} setFarmData={setFarmData} farmData={farmData} user={user}/>}/>
            </Routes>
        </div>
    )
}