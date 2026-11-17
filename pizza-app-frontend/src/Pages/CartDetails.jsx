
import React, { useEffect } from 'react'
import '../css/cartDetails.css'
import { useDispatch, useSelector } from 'react-redux'
import { addProductToCart, clearCart, getCart, removeProductFromCart } from '../redux/slices/CartSlice';
import Layout from '../layouts/Layout';
import { Link } from 'react-router-dom';

function CartDetails() {
    const dispatch = useDispatch();
    const cartData = useSelector((state) => state.cart);
    console.log("cartData from Redux: ", cartData);

    async function fetchCart() {
        await dispatch(getCart()); // ✅ don't assign to var, use Redux state
    }

    // ✅ take items directly from Redux state
    const cartItems = cartData?.cartData?.cart?.items || [];

    const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cartItems.reduce(
        (acc, item) => acc + item.quantity * item.product.price,
        0
    );

    async function handleIncrease(productId) {
        await dispatch(addProductToCart(productId)); // ✅ +1
        await fetchCart(); // ✅ refresh cart after update
    }
    async function handleDecrease(productId) {
        await dispatch(removeProductFromCart(productId)); // ✅ -1
        await fetchCart();
    }
    async function handleClearCart() {
        await dispatch(clearCart());
        await fetchCart(); 
    }

    useEffect(() => {
        fetchCart();
    }, []);

    return (
        <Layout>
            <div className="cart-page">
                <h1 className="cart-title">Your Cart</h1>

                {cartItems.length === 0 ? (
                    <p className="empty-cart">Your cart is empty 🍕</p>
                ) : (
                    <div className="cart-items">
                        {cartItems.map((item) => (
                            <div key={item._id} className="cart-card">
                                <div className="cart-img">
                                    <img src={item.product.productImage} alt={item.product.productName} />
                                    <span className={`badge ${item.product.foodType === "veg" ? "veg" : "non-veg"}`}>
                                        {item.product.foodType}
                                    </span>
                                </div>

                                <div className="cart-info">
                                    <h2 className="cart-name">{item.product.productName}</h2>
                                    <p className="cart-price">₹{item.product.price}</p>
                                    <div className="quantity-controls">
                                        <button onClick={() => handleDecrease(item.product._id)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => handleIncrease(item.product._id)}>+</button>
                                    </div>
                                </div>
                            </div>
                        ))}


                        {/* Cart Summary */}
                        <div className="cart-summary">
                            <p>Total Items: <strong>{totalQuantity}</strong></p>
                            <p>Total Price: <strong>₹{totalPrice}</strong></p>
                            <button className="clear-btn" onClick={handleClearCart}>Clear Cart</button>
                           <Link to={'/order'}> <button className="checkout-btn">Proceed to Checkout</button></Link>
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    );
}

export default CartDetails;

