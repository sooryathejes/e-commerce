import React from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Collection from './Pages/Collection'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import PlaceOrder from './Pages/PlaceOrder'
import Orders from './Pages/Orders'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';

function App() {

  return (
    <div className = "px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer />
      <NavBar/>
      <SearchBar/>
      <Routes>
        <Route path='/' element = {<Home/>}/> 
        <Route path='/collection' element = {<Collection/>}/>
        <Route path='/about' element = {<About/>}/>
        <Route path='/Contact' element = {<Contact/>}/>
        <Route path='/Product/:productId' element = {<Product/>}/>
        <Route path='/cart' element = {<Cart/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/place-order' element = {<PlaceOrder/>}/>
        <Route path='/orders' element = {<Orders/>}/> 
      </Routes>
      <Footer/>
    </div>
  )
} 
export default App 