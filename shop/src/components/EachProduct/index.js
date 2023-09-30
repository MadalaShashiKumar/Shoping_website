import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './index.css'
import Navbar from "../Navbar";
import { MdKeyboardBackspace } from 'react-icons/md'
import EachProDetails from "../EachProDetails";
import LoaderPro from "../LoaderPro";

const eachApiStatuses = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'IN_PROGRESS',
}

const EachProduct = () => {
    const [eachProduct, setEachProduct] = useState({})
    const [apiStatus, setApiStatus] = useState(eachApiStatuses.initial)
    const { id } = useParams()
    const getProduct = async () => {
        setApiStatus(eachApiStatuses.inProgress)
        const url = `https://dummyjson.com/products/${id}`
        const response = await fetch(url)
        const data = await response.json()
        if (response.ok === true) {
            const updatedData = {
                title: data.title,
                thumbnail: data.thumbnail,
                stock: data.stock,
                rating: data.rating,
                price: data.price,
                images0: data.images[0],
                images1: data.images[1],
                images2: data.images[2],
                images3: data.images[3],
                images4: data.images[4],
                id: data.id,
                discountPercentage: data.discountPercentage,
                category: data.category,
                brand: data.brand,
                description: data.description
            }
            setEachProduct({ ...updatedData })
            setApiStatus(eachApiStatuses.success)
        }
    }
    useEffect(() => {
        getProduct()
    }, [])

    const navigate = useNavigate()
    const getAll = () => {
        navigate('/products')
    }
    const apiSuccess = () => {
        return (
            <div className="product-ul">
                <EachProDetails eachItem={eachProduct} key={eachProduct.id} />
            </div>
        )
    }
    const apiloading = () => {
        return (
            <LoaderPro />
        )
    }
    const renderApis = () => {
        switch (apiStatus) {
            case eachApiStatuses.inProgress:
                return <>{apiloading()}</>
            case eachApiStatuses.success:
                return <>{apiSuccess()}</>
        }
    }

    return (
        <div className="category-container">
            <Navbar />
            <div className="category-ul-main-container">
                {/* <Sidebar /> */}
                <div className="slide-container1">
                    <MdKeyboardBackspace onClick={getAll} className="all-products-heading" />
                </div>
                {renderApis()}
            </div>
        </div>
    )
}
export default EachProduct