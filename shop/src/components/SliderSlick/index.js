import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'

export default function SliderSlick() {

    const [slikData, setSlikData] = useState([])

    const getSlikeApi = async () => {
        const response = await fetch('https://dummyjson.com/products/category/laptops')
        const data = await response.json()
        if (response.ok === true) {
            setSlikData([...data.products])
        }
    }

    useEffect(() => {
        getSlikeApi()
    }, [])

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        slidesToScroll: 1,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 786,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],

    }
    return (
        <ul className="slider-container">
            <Slider {...settings}>
                {slikData.map((each) => (
                    <Link className="slider-button" key={each.id} to={`/products/${each.id}`}>
                        <img className="slider-img" src={each.thumbnail} />
                    </Link>
                ))}
            </Slider>
        </ul>
    );
}