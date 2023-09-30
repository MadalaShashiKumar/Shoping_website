import React, { useEffect } from "react";
import './index.css'
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import { MdKeyboardBackspace } from 'react-icons/md'

const Contact = () => {
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
                        <img src="https://res.cloudinary.com/dzqwhkjng/image/upload/v1671003989/Group_7484_bqym5d.png" alt="img" />
                        <h2 className="page-not-found-para">  Page Not Found</h2>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Contact 