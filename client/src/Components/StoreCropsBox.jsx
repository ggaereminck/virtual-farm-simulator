import React from "react";
import { useState } from "react";

export default function StoreCropsBox({storeCrop, farmId, farm, setFarmData}){
    const [addFarmCrop, setAddFarmCrop] = useState({
        "name": storeCrop.name,
        "harvest_value": storeCrop.sale_value,
        "img": storeCrop.img,
        "farm_id": farmId
    })
    // const [newCurrency, setNewCurrency] = useState()

    function newFarmCrop(addFarmCrop, farmId, newCurrency){
        fetch('/farm_crops', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(addFarmCrop)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        fetch(`/farms/${farmId}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({currency: newCurrency})
        })
        .then(res => res.json())
        .then(data => setFarmData([data]))
    }

    return(
        <div>
            <h4>{`Name: ${storeCrop.name}`}</h4>
            <ul>{`Cost: ${storeCrop.cost}`}</ul>
            <ul>{`Harvest Value: ${storeCrop.sale_value}`}</ul>
            <ul>{`Grow Time: ${storeCrop.grow_time}`}</ul>
            <image src={`${storeCrop.img}`} alt={storeCrop.name}></image>
            <button onClick={() => {
                const newCurrency= farm.currency - storeCrop.cost
                newFarmCrop(addFarmCrop, farmId, newCurrency)}}>Purchase</button>
        </div>
    )
}