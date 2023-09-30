import React, { useEffect } from "react";
import './index.css'
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import SliderSlick from "../SliderSlick";

const Home = () => {
    const navigate = useNavigate()
    const shopnowBtn = () => {
        navigate('/products')
    }
    useEffect(() => {
        if (!localStorage.getItem('jwt_token')) {
            navigate('/login')
        }
    }, [])



    return (
        <div className="home-container">
            <Navbar />
            <div className="home-content-container">
                <h1 className="home-heading">Electronics That Get You Noticed</h1>
                <div>
                    <SliderSlick />
                </div>
                <div>
                    <button onClick={shopnowBtn} className="home-button" type="button" >Shop Now</button>
                </div>
            </div>
        </div>
    )
}
export default Home