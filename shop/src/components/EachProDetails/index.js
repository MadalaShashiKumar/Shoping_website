import React, { useState, useEffect } from "react";
import './index.css'

const EachProDetails = (props) => {
    const { eachItem } = props
    const { title, stock, rating, price, images0, images1, images2, images3, images4, id, discountPercentage, description, category, brand } = eachItem
    const [imgSelector, setImgSelector] = useState(images0)

    const imgselectBtn = (event) => {
        console.log(event.target.id)
        setImgSelector(event.target.id)
    }


    return (
        <div className="each-pro-container">
            <div className="each-pro-sub-container">
                <div className="each-pro-sub-container-1">
                    <img className="each-pro-img" src={imgSelector} />
                    <div className="each-pro-images">
                        <img className="each-pro-img-each" onClick={imgselectBtn} src={images0} id={images0} />
                        {images1 !== undefined && <img className="each-pro-img-each" onClick={imgselectBtn} src={images1} id={images1} />}
                        {images2 !== undefined && <img className="each-pro-img-each" onClick={imgselectBtn} src={images2} id={images2} />}
                        {images3 !== undefined && <img className="each-pro-img-each" onClick={imgselectBtn} src={images3} id={images3} />}
                        {images4 !== undefined && <img className="each-pro-img-each" onClick={imgselectBtn} src={images4} id={images4} />}

                    </div>
                </div>
                <div className="each-pro-deatails-container">
                    <h2 className="each-pro-deatails-title">{title}</h2>
                    <p className="each-pro-deatails-brand">Brand: <span className="each-pro-span">{brand}</span></p>
                    <p className="each-pro-deatails-price">$ {price}/- </p>
                    <p className="each-pro-deatails-rating">Rating: <span className="each-pro-span">{rating}</span></p>
                    <p className="each-pro-deatails-rating">Avaliable: <span className="each-pro-span">{stock}</span></p>
                    <div>
                        <button className="each-pro-deatails-buy-btn" type="button">Buy Know</button>
                        <button className="each-pro-deatails-add-cart-btn" type="button">Add To Cart</button>
                    </div>
                    <p className="each-pro-deatails-desc">{description}</p>
                </div>
            </div>
        </div>
    )
}
export default EachProDetails