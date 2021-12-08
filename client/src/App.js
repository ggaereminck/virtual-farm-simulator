import { useState, useEffect } from 'react';
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Header from './Components/Header';
import { Route, Routes } from 'react-router';
import WelcomePage from './Components/WelcomePage';

function App() {
  const [user, setUser] = useState(null)
  const [farmData, setFarmData] = useState([])

  useEffect(() =>{  
    fetch('/me', {
      credentials: 'include'
    })
    .then(r => {
    
      if(r.ok) {
        r.json().then(user =>  setUser(user)) 
      }
    })
  },[])

  useEffect(() => {
    fetch('/farms')
    .then(res => res.json())
    .then(data => setFarmData(data))
  }, [])


  if(!user) return <Login onLogin={setUser} setFarmData={setFarmData}/>


  return (
    <div className="App">
      <Header setUser={setUser}/>
      <Routes>
          <Route  path="/welcome" element ={<WelcomePage user={user} setFarmData={setFarmData}/>}/>
      </Routes>
        {farmData.filter(farm => farm.user_id === user.id).map(farm => <Home farm={farm} setFarmData={setFarmData} farmData={farmData} setUser={setUser} user={user}/>)}
    </div>
  );
}

export default App;
