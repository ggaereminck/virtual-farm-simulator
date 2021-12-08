import React from "react";
import AnimalBox from "./Animal_Box";
import { useState } from "react";

export default function AnimalContainer({farm_animals, farm, setFarmData, farmData}){
    const [currentTime, setCurrentTime] = useState(new Date().toISOString())
    const [preHarvestTime, setPreHarvestTime] = useState(new Date(farm_animals.created_at))

    const harvestTime = (new Date(farm_animals.created_at).setHours(preHarvestTime.getHours() + 1))

    const y = (new Date(harvestTime).toISOString())

    const displayTime = (new Date(harvestTime).toString()).slice(4,24)

    function harvest(id, farm_id, newCurrency){
        fetch(`/farm_animals/${id}`, {
            method: 'DELETE'
        })
        .then(() => {
            const deleteAnimal = farmData.filter(farm_animal => farm_animal.id !== id)
            console.log(deleteAnimal)
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
            <h4>{farm_animals.name}</h4>
            <p>Harvest Value: {farm_animals.harvest_value}</p>
            <img src={farm_animals.img}/>
            {y < currentTime ? <button onClick={() => {
                const newCurrency = farm.currency + farm_animals.harvest_value
                harvest(farm_animals.id, farm.id, newCurrency)}}>Harvest!</button> : ""}
            <p>Harvest Time: {displayTime}</p>
        </div>
    )
}