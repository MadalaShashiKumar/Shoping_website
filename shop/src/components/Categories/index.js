import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './index.css'
import MyContext from "../../Context";
import Navbar from "../Navbar";
import ProductsDetails from "../ProductsDetails";
import { MdKeyboardBackspace } from 'react-icons/md'
import LoaderPro from "../LoaderPro";

const eachApiStatuses = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'IN_PROGRESS',
}

const Categories = () => {
    const [filterdItem, setFilterdItem] = useState([])
    const { category } = useContext(MyContext)
    const [productApi, setProductApi] = useState(eachApiStatuses.initial)

    const getCategoryProducts = async () => {
        setProductApi(eachApiStatuses.inProgress)
        const url = `https://dummyjson.com/products/category/${category}`
        const response = await fetch(url)
        const data = await response.json()
        if (response.ok === true) {
            setFilterdItem([...data.products])
            setProductApi(eachApiStatuses.success)
        }
    }
    useEffect(() => {
        getCategoryProducts()
    }, [])


    const navigate = useNavigate()
    const getAll = () => {
        navigate('/products')
    }


    const apiSuccess = () => {
        return (
            <ul className="product-ul">
                {filterdItem.map((each) => (
                    <ProductsDetails key={each.id} eachItem={each} />
                ))}
            </ul>
        )
    }
    const apiLoading = () => {
        return (
            <LoaderPro />
        )
    }
    const renderProduct = () => {
        switch (productApi) {
            case eachApiStatuses.inProgress:
                return <>{apiLoading()}</>
            case eachApiStatuses.success:
                return <>{apiSuccess()}</>
        }
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
                <div className="slide-container1">
                    <MdKeyboardBackspace onClick={getAll} className="all-products-heading" />
                </div>
                {renderProduct()}
            </div>
        </div>
    )
}
export default Categories