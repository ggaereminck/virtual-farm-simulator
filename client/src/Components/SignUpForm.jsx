import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import '../CSS/login.css'

const SignUpForm = ({onLogin, setFarmData}) => {
    const navigate = useNavigate()
    const [signup, setSignup] = useState({
        username: '',
        password: '',
        password_confirmation: ''
    })

    // const [newFarm, setNewFarm] = useState({
    //   currency: 500,
    //   name: 'Farm',
    //   img: 'https://justinike.com/assets/images/2020-03-01-Pixel-Art-Color-and-Graphical-Projection/Farm.gif',
    //   user_id: 
    // })

    const [isloading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState([])

    const handleChange = e => {
        setSignup({
            ...signup,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setErrors([]);
        setIsLoading(true);
        fetch("/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(signup),
        }).then((r) => {
          setIsLoading(false);
          if (r.ok) {
            r.json().then(user => onLogin(user));
            navigate("/welcome")
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
        // fetch('/farms', {
        //   method: "POST",
        //   headers: {'Content-Type': 'application/json'},
        //   body: JSON.stringify(newFarm)
        // })
        // .then(res => res.json())
        // .then(data => setFarmData(data))
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <input className='input-box' placeholder='Username' type='text' id='username' 
             name = "username"autoComplete='off' value={signup.username} 
            onChange={handleChange}
            />

            <input className='input-box' placeholder='Password' type='password' id='password' 
             name = "password"
            autoComplete='current-password' value={signup.password} 
            onChange={handleChange}
            />
            <input className='input-box' placeholder='Password Confirmation' type='password' 
             name = "password_confirmation"
            id='password_confirmation' autoComplete='current-password' value={signup.password_confirmation}
            onChange={handleChange} />
            <button type='submit' className='signup-btn'>
            {isloading ? "Loading...." : "Sign Up"}
            </button>
            {errors.map(err => {
                return (
                    <span key={err}>
                        {err}
                    </span>
                )
                })}
        </form>
        )
}

export default SignUpForm