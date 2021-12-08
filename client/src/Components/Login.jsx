import {React, useState} from "react";
import LoginForm from "./Login_Form";
import SignUpForm from "./SignUpForm";
import '../CSS/login.css'

export default function Login({onLogin, setFarmData}){

    const [showLogin, setShowLogin] = useState(true)

    return(
        <div className="auth-container">
            <div className="auth-card">
                <div className = "inner-card">
                    {showLogin ? (
                        <div className='card-front'>
                            <LoginForm onLogin={onLogin}/>
                            <button onClick={() => setShowLogin(false)}>Register Here</button>
                        </div> 
                    )
                    :
                    (
                        <div className='card-back'>
                            <SignUpForm onLogin={onLogin} setFarmData={setFarmData}/>
                            <button onClick={() => setShowLogin(true)}>Login Here</button>
                        </div> 
                    )}
                </div>
            </div>
        </div>
    )
}