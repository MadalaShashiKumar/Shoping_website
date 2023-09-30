import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Products from './components/Products';
import MyContext from './Context';
import Categories from './components/Categories';
import EachProduct from './components/EachProduct';
import Cart from './components/Cart';
import Contact from './components/Contact';

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

function App() {
  const [category, setCategory] = useState(FilterData[0].id)
  return (
    <MyContext.Provider value={{ category, setCategory }}>
      <BrowserRouter>
        <Routes>
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/' element={<Home />} />
          <Route exact path='/products' element={<Products />} />
          <Route exact path='/products/:id' element={<EachProduct />} />
          <Route exact path='/category' element={<Categories />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
