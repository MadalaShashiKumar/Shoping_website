import React, { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import './index.css'

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [failure, setFailure] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const usernameRef = useRef()

    useEffect(() => {
        usernameRef.current.focus()
    }, [])

    const inputChange = event => {
        setUsername(event.target.value)
    }
    const passwordChange = event => {
        setPassword(event.target.value)
    }

    const loginBtn = async (event) => {
        event.preventDefault()
        const userDetails = { username, password }
        const url = 'https://dummyjson.com/auth/login'
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userDetails)
        }
        const response = await fetch(url, options)
        const data = await response.json()

        if (response.ok === true) {
            localStorage.setItem('jwt_token', data.token)
            navigate('/')
        }
        else {
            setError(data.message)
            setFailure(true)
        }

    }
    return (
        <div className="Login-container">
            <form className="login-form" onSubmit={loginBtn}>
                <div className="login-logo-container">
                    <img className="login-logo" src='https://fakestoreapi.com/icons/logo.png' alt="logo" />
                </div>
                <label className="login-label" htmlFor="username">Username</label>
                <br />
                <input ref={usernameRef} onChange={inputChange} className="login-input" type="text" placeholder="Enter Username" />
                <br />
                <label className="login-label" htmlFor="password">Password</label>
                <input onChange={passwordChange} className="login-input" type="password" placeholder="Enter Password" />
                {failure && <p className="login-error-msg">{error}</p>}
                <button type="submit" className="login-button" >Submit</button>
            </form>
        </div>
    )
}
export default Login