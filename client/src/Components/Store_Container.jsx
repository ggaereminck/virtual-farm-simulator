import {React, useState, useEffect} from "react";
import StoreAnimals from "./Store_Animals";
import StoreCrops from "./Store_Crops";

export default function StoreContainer({farmId, farm, setFarmData}){
    const [storeData, setStoreData] = useState([])

    useEffect(()=> {
        fetch("/stores")
        .then(res => res.json())
        .then(data => setStoreData(data))
    }, []) 

    return(
        <div>
            <h2>Store:</h2>
            {storeData.map(store => 
                <StoreAnimals store={store} farmId={farmId} farm={farm} setFarmData={setFarmData}/>)}
            {storeData.map(store => 
                <StoreCrops store={store} farmId={farmId} farm={farm} setFarmData={setFarmData}/>)}
        </div>
    )
}