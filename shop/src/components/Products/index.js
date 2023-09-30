import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './index.css'
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import ProductsDetails from "../ProductsDetails";
import LoaderPro from "../LoaderPro";

const ProductsApiStatuses = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'IN_PROGRESS',
}

const Products = () => {
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState('')
    const [btnSearch, setBtnSearch] = useState('')
    const navigate = useNavigate()
    const [productsApiStatuses, setProductsApiStatuses] = useState(ProductsApiStatuses.initial)

    const url = `https://dummyjson.com/products/search?q=${search}&limit=100`
    const getAllProducts = async () => {
        setProductsApiStatuses(ProductsApiStatuses.inProgress)
        const response = await fetch(url)
        const data = await response.json()
        // console.log(data)
        if (response.ok === true) {
            setProducts([...data.products])
            setProductsApiStatuses(ProductsApiStatuses.success)
        }
    }

    useEffect(() => {
        if (!localStorage.getItem('jwt_token')) {
            navigate('/login')
        }
    }, [])


    useEffect(() => {
        getAllProducts()
    }, [])
    // console.log(products)
    const searchInput = (event) => {
        setSearch(event.target.value)
        getAllProducts()
    }
    const searchBtn = () => {
        setBtnSearch(search)
    }

    // console.log(products)
    const notFoundProduct = () => {
        return (
            <div className="notfound-search-container">
                <img className="notfound-search-img" src="https://websites.smartcapita.com/ecom/smart-grocery-store/images/no-products-found.png" alt="img" />
            </div>
        )
    }

    const apiSuccess = () => {
        return (
            <>
                {products.length === 0 ? notFoundProduct() :
                    <ul className="product-ul">
                        {products.map((each) => (
                            <ProductsDetails eachItem={each} key={each.id} />
                        ))}
                    </ul>
                }
            </>
        )
    }

    const apiLoader = () => {
        return (
            <LoaderPro />
        )
    }

    const renderProducts = () => {
        switch (productsApiStatuses) {
            case ProductsApiStatuses.success:
                return <>{apiSuccess()}</>
            case ProductsApiStatuses.inProgress:
                return <>{apiLoader()}</>
        }
    }

    return (
        <div className="products-container">
            <Navbar />
            <div className="products-sub-container">
                <Sidebar />
                <div className="product-ul-main-container">
                    <div className="product-search-input-container">
                        <input onChange={searchInput} className="product-search-input" type="search" placeholder="Search..." />
                        <button onClick={searchBtn} className="product-search-input-icon" type="button">
                            Search
                        </button>
                    </div>
                    {renderProducts()}
                </div>
            </div>
        </div>
    )
}
export default Products