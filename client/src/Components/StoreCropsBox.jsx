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
            <h4>{`Crop: ${storeCrop.name}`}</h4>
            <ul>{`Cost: ${storeCrop.cost}`}</ul>
            <ul>{`Harvest Value: ${storeCrop.sale_value}`}</ul>
            <ul>{`Grow Time: ${storeCrop.grow_time}`}</ul>
            <image src={`${storeCrop.img}`} alt={storeCrop.name}></image>
            <button className="store-button" onClick={() => {
                const newCurrency= farm.currency - storeCrop.cost
                if (newCurrency > 0) {
                newFarmCrop(addFarmCrop, farmId, newCurrency)
                } else { alert('You are short on currency! Purchase cannot be comleted.')}}}>Purchase</button>
        </div>
    )
}