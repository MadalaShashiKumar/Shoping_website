import React from "react";
import { Link } from 'react-router-dom'
import './index.css'

const ProductsDetails = (props) => {
    const { eachItem } = props
    const { title, thumbnail, stock, rating, price, id } = eachItem

    return (
        <Link className="pro-link" to={`/products/${id}`}>
            <li className="product-details-container">
                <div className="product-details-img-container">
                    <img src={thumbnail} className="product-details-img" alt="img" />
                </div>
                <div className="product-details-para">
                    <h4 className="product-details-heading">{title}</h4>
                    <p className="product-details-para-para">Rating:<span className="product-details-span1">{rating}</span> Stock:<span className="product-details-span1">{stock}</span></p>
                    <p className="product-details-para-para1">$ {price}/-</p>
                </div>
            </li>
        </Link>


    )
}
export default ProductsDetails