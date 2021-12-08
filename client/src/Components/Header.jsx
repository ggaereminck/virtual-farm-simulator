import React from "react";
import {NavLink} from "react-router-dom"

export default function Header({setUser}){
    const handleLogOut = () => {
        fetch('/logout', {
            method: 'DELETE'
        }).then(r => {
            if(r.ok){
                setUser(null);
            }
        })
    }

    return(
        <nav className="nav">
            <NavLink to='/'>
                <div>Farm</div>
            </NavLink>
            <div className='logout_btn'>
                <button onClick={() => handleLogOut()}>Logout</button>
            </div>
        </nav>
    )
}