import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Home.jsx'
import Home from './Home.jsx'
import Layout from './layouts/Layout.jsx'
import { Route, Routes } from 'react-router-dom'
import Signup from './Pages/Auth/sign-up.jsx'
import Login from './Pages/Auth/login.jsx'
import NotFound from './Pages/Notfound.jsx'
import AddProduct from './Pages/Admin/AddProduct.jsx'
import ProductDetails from './Pages/ProductDetails.jsx'
import CartDetails from './Pages/CartDetails.jsx'
import Order from './Pages/Order.jsx'
import OrderSuccess from './Pages/orderSuccess.jsx'
import RequireAuth from './Pages/Auth/requireAuth.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth/signup' element={<Signup />} />
        <Route path='/auth/login' element={<Login />} />
        <Route path='/order' element={<Order />} />

        <Route path='/order' element={<RequireAuth />}>
          <Route path='/order/success' element={<OrderSuccess />} />  
        </Route>
        <Route path='/admin/add-product' element={<AddProduct />} />
        <Route path='/product/:productId' element={<ProductDetails />} />
        <Route path='/cart' element={<CartDetails />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}
export default App
