import LeaderBoard from "./LeaderBoard";
import CropContainer from "./Crop_Container";
import AnimalContainer from "./Animal_Container";
import StoreContainer from "./Store_Container";
import {React, useState, useEffect} from "react";


export default function Farm({farm, setFarmData, farmData, user}){
    const [leaderBoard, setLeaderBoard] = useState([])
    const [eventData, setEventData] = useState([])
    const [randomEvent, setRandomEvent] = useState()

    useEffect(() => {
        fetch('/users')
        .then(res => res.json())
        .then(data => setLeaderBoard(data))
    }, [])

    useEffect(() => {
        fetch('/events')
        .then(res => res.json())
        .then(data => setEventData(data))
      }, [])

    function handleEvent(farm_id, newCurrency){
        fetch(`/farms/${farm_id}`,{
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({currency: newCurrency})
        })
        .then(res => res.json())
        .then(data => setFarmData([data]))
    }


    return (
        <div className="farm-name">
            <h2>{farm.name}</h2>
            <h4>{`Currency: ${farm.currency}`}</h4>
            <button onClick={() => {
                const randomEventNumber = Math.floor(Math.random() * (8))
                const newCurrency = farm.currency + (eventData[randomEventNumber].reward)
                handleEvent(farm.id, newCurrency)
                alert(`${eventData[randomEventNumber].name} Your currency has been changed by ${eventData[randomEventNumber].reward}`)
                }}>Random Event</button>
            <div className="home-screen">
                    <div className="leaderboard">
                        <h2>Leaderboard:</h2>
                        {leaderBoard.sort((a, b) => b.farms[0].currency - a.farms[0].currency).map(user => 
                            <LeaderBoard user={user}/>)}
                    </div>
                    <div className="store-box">
                        <StoreContainer farmId={farm.id} farm={farm} setFarmData={setFarmData}/>
                    </div>
                    <div className="farm-box">

                        <div>
                            <h3>Planted Crops:</h3>
                            {farm.farm_crops.map(farm_crops => 
                            <CropContainer farm_crops={farm_crops} farm={farm} setFarmData={setFarmData} farmData={farmData}/>)}
                        </div>
                        <div>
                            <h3>Farm Animals:</h3>
                            {farm.farm_animals.map(farm_animals => 
                            <AnimalContainer farm_animals={farm_animals} farm={farm} setFarmData={setFarmData} farmData={farmData}/>)}
                        </div>
                    </div>
            </div>
        </div>
    )
}