import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import '../CSS/login.css'


export default function WelcomePage({user, setFarmData}){
    const navigate = useNavigate()
    const [newFarm, setNewFarm] = useState({
        currency: 500,
        name: "",
        img: "",
        user_id: user.id
    })

    function handleChange(e){
        setNewFarm({
            ...newFarm,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch("/farms", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newFarm)
        })
        .then(res => res.json())
        .then(data => setFarmData([data] ))
        navigate('/')
    }

    console.log(user)

    return (
        <div className="auth-container">
            <div className="auth-card">
            <div className = "inner-card">
            <div className='card-front'>
            <h1>Welcome To Virtual Farm Simulator!</h1>
            <p>Please choose a name for your Farm!</p>
            <form onSubmit={handleSubmit}>
                <input className='input-box' placeholder='Your Farm Name' type='text' id='name' name='name' value={newFarm.name} onChange={handleChange}/>
                <button type='submit'>Submit</button>
            </form>
            </div>
            </div>
            </div>
        </div>
    )
}