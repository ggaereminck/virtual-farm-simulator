import React from "react";
import StoreAnimalBox from "./StoreAnimalBox";

export default function StoreAnimals({store, farmId, farm, setFarmData}){
    return (
        <div>
            {store.store_animals.map(store =>
                <StoreAnimalBox storeAnimal={store} farmId={farmId} farm={farm} setFarmData={setFarmData}/>)}
        </div>
    )
}