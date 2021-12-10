import {React, useState} from "react";

export default function StoreAnimalBox({storeAnimal, farmId, farm, setFarmData}){
    const [addFarmAnimal, setAddFarmAnimal] = useState({
        "name": storeAnimal.name,
        "harvest_value": storeAnimal.sale_value,
        "img": storeAnimal.img,
        "farm_id": farmId
    })

    // const [newCurrency, setNewCurrency] = useState(farm.currency - storeAnimal.cost)

    function newFarmAnimal(addFarmAnimal, farmId, newCurrency){
        fetch('/farm_animals', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(addFarmAnimal)
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
            <h4>{`Animal: ${storeAnimal.name}`}</h4>
            <ul>{`Goods: ${storeAnimal.good_produced}`}</ul>
            <ul>{`Cost: ${storeAnimal.cost}`}</ul>
            <ul>{`Sale Value:${storeAnimal.sale_value}`}</ul>
            <image src={storeAnimal.img} alt={storeAnimal.name}></image>
            <button className="store-button" onClick={() => {
                const newCurrency = farm.currency - storeAnimal.cost
                if (newCurrency > 0){
                newFarmAnimal(addFarmAnimal, farmId, newCurrency)} else { alert('You are short on currency! Purchase cannot be comleted.')}}}>Purchase</button>
        </div>
    )
}