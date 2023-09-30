import React from "react";
import "./index.css"
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    const logoutBtn = () => {
        localStorage.removeItem('jwt_token')
        navigate('/login')
    }
    return (
        <div className="nav-container">
            <div>
                <Link className="nav-link" to='/'>
                    <img className="nav-logo" src='https://fakestoreapi.com/icons/logo.png' alt="logo" />
                </Link>
            </div>
            <ul className="nav-ul">
                <li className="nav-li">
                    <Link className="nav-link" to='/'>Home</Link>
                </li>
                <li className="nav-li">
                    <Link className="nav-link" to='/products'>Products</Link>
                </li>
                <li className="nav-li">
                    <Link className="nav-link" to='/cart'>Cart</Link>
                </li>
                <li className="nav-li">
                    <Link className="nav-link" to='/contact'>Contact</Link>
                </li>
            </ul>
            <div className="nav-logout-container">
                <button onClick={logoutBtn} className="nav-logout-btn" type="button">Logout</button>
            </div>
        </div>
    )
}
export default Navbar