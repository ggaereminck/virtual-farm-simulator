import React from "react";
import StoreCropsBox from "./StoreCropsBox";

export default function StoreCrops({store, farmId, farm, setFarmData}){
    return(
        <div>
            {store.store_crops.map(storeCrop => 
                <StoreCropsBox storeCrop={storeCrop} farmId={farmId} farm={farm} setFarmData={setFarmData}/>)}
        </div>
    )
}