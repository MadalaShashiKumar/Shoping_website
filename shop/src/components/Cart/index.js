import React, { useEffect } from "react";
import './index.css'
import { useNavigate } from "react-router-dom";
import { MdKeyboardBackspace } from 'react-icons/md'
import Navbar from "../Navbar";


const Cart = () => {
    const navigate = useNavigate()
    const getAll = () => {
        navigate('/products')
    }
    useEffect(() => {
        if (!localStorage.getItem('jwt_token')) {
            navigate('/login')
        }
    }, [])

    return (
        <div className="category-container">
            <Navbar />
            <div className="category-ul-main-container">
                <div className="slide-container">
                    <MdKeyboardBackspace onClick={getAll} className="all-products-heading" />
                </div>
                <div className="cart-img-container">
                    <div>
                        <img src="https://dev.agriapp.net/public/images/emptycart.png" alt="img" />
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Cart