import React, { useState } from 'react'
import "../css/order.css"  // create a new CSS file
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../layouts/Layout';
import toast from 'react-hot-toast';
import { createOrder } from '../redux/slices/orderSlice';
import { getCart } from '../redux/slices/CartSlice';

function Order() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cartData = useSelector((state) => state.cart);
    const [details, setDetails] = useState({
        paymentMethod: '',
        address: ''
    })
    console.log(details);
    
    const cartItems = cartData?.cartData?.cart?.items || [];

    const totalPrice = cartItems.reduce(
        (acc, item) => acc + item.quantity * item.product.price,
        0
    );
    console.log(cartData);
    
    function handleUserInput(e){
        
        
        const {name, value} = e.target;
        console.log("e",e.target.value);
        
        setDetails({
            ...details,
            [name]: value
        })
    }

    async function handleFormSubmit(e) {
        e.preventDefault();
        if(details.paymentMethod ===''){
          toast.error("Please fill the complete adderess");
          return;
        } 
        const res = await dispatch(createOrder(details));
        dispatch(getCart());
        if(res?.payload?.data?.success){
          navigate('/order/success');
        }
        console.log("resp: ", res);
        
    }
  

  return (
    <Layout>
    <div className="order-page">
      <h1 className="order-title">Thanks for choosing us ❤️</h1>

      {/* Price Box */}
      <div className="order-box">
        <p className="order-price">Total Price: <strong>₹{totalPrice}</strong></p>

        {/* Payment Method */}
        <label className="order-label">
          Select Payment Method:
          <select onChange={handleUserInput} className="order-select" name='paymentMethod'>
            <option value="">-- Select --</option>
            <option value="COD">Cash On Delivery</option>
            <option value="Online">UPI</option>
          </select>
        </label>

        {/* Address */}
        <label className="order-label">
          Address:
          <input 
            type="text" 
            placeholder="Your Address" 
            className="order-input"
            name='address'
            onChange={handleUserInput}
          />
        </label>

        {/* Place Order Button */}
        <button type="submit" onClick={handleFormSubmit} className="order-btn">Place Order</button>
      </div>
    </div>
    </Layout>
  )
}

export default Order
