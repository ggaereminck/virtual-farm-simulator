import React from "react";
import CropBox from "./Crop_Box";
import { useState } from "react";

export default function CropContainer({farm_crops, farm, farmData, setFarmData}){
    const [currentTime, setCurrentTime] = useState(new Date().toISOString())
    const [preHarvestTime, setPreHarvestTime] = useState(new Date(farm_crops.created_at))

    const harvestTime = (new Date(farm_crops.created_at).setHours(preHarvestTime.getHours() + 1))

    const y = (new Date(harvestTime).toISOString())

    const displayTime = (new Date(harvestTime).toString()).slice(4,24)

    function harvest(id, farm_id, newCurrency){
        fetch(`/farm_crops/${id}`, {
            method: 'DELETE'
        })
        .then(() => {
            const deleteCrop = farmData.filter(farm_crop => farm_crop.id !== id)
            console.log(deleteCrop)
        })
        fetch(`/farms/${farm_id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({currency: newCurrency})
        })
        .then(res => res.json())
        .then(data => setFarmData([data]))
    }

    return(
        <div>
            <h4>{farm_crops.name}</h4>
            <p>Harvest Value: {farm_crops.harvest_value}</p>
            <img src={farm_crops.img}/>
            {y < currentTime ? <button className="store-button" onClick={() => {
                const newCurrency = farm.currency + farm_crops.harvest_value
                harvest(farm_crops.id, farm.id, newCurrency)}}>Harvest!</button> : ""}
            <p>Harvest Time: {displayTime}</p>
        </div>
    )
}