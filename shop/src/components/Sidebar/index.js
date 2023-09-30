import React, { useContext } from "react";
import './index.css'
import { useNavigate } from 'react-router-dom'
import MyContext from "../../Context";

const FilterData = [
    {
        id: "smartphones",
        text: "Smart Phones"
    },
    {
        id: "laptops",
        text: "Laptops"
    },
    {
        id: "fragrances",
        text: "Fragrances"
    },
    {
        id: "skincare",
        text: "Skincare"
    },
    {
        id: "groceries",
        text: "Groceries"
    },
    {
        id: "home-decoration",
        text: "Home Decoration"
    },
    {
        id: "furniture",
        text: "Furniture"
    },
    {
        id: "tops",
        text: "Tops"
    },
    {
        id: "womens-jewellery",
        text: "Womens"
    },
    {
        id: "mens-watches",
        text: "Mens"
    },
    {
        id: "automotive",
        text: "Automotive"
    },
    {
        id: "motorcycle",
        text: "Motorcycle"
    },
    {
        id: "lighting",
        text: "Lighting"
    },
]


const Sidebar = () => {
    const navigate = useNavigate()
    const { category, setCategory } = useContext(MyContext)

    const categoryBtn = (event) => {
        setCategory(event.target.id)
        navigate('/category')

    }
    return (
        <ul className="slide-container">
            <h3 className="slide-container-heading">Category</h3>
            {FilterData.map((each) => {
                return <li onClick={categoryBtn} id={each.id} key={each.id}>{each.text}</li>
            })}
        </ul>
    )
}
export default Sidebar