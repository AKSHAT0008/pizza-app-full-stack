// import React, { useEffect, useState } from 'react'
// import { useDispatch } from 'react-redux';
// import { useParams } from 'react-router-dom'
// import { getProductDetail } from '../redux/slices/ProductSlice';

// function ProductDetails() {
//     const {productId} = useParams();
//     const dispatch = useDispatch();
//     const [productDetails, setProductDetails] = useState({});

//     async function fetchProductDetails() {
//         const details = await dispatch(getProductDetail(productId));
//         console.log("details are: ", details.payload.data.res);
//         setProductDetails((details.payload.data.res));     
//         console.log(productDetails);

//     }

//     useEffect(() => {
//       fetchProductDetails();
//     }, [productId])


//   return (
//     <>


//   </>)
// }

// export default ProductDetails
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getProductDetail } from '../redux/slices/ProductSlice';
import "../css/ProductDetails.css";
import { addProductToCart, getCart, removeProductFromCart } from '../redux/slices/CartSlice';
import Layout from '../layouts/Layout';

function ProductDetails() {
    const { productId } = useParams();
    const dispatch = useDispatch();
    const [productDetails, setProductDetails] = useState({});
    const [isInCart, setIsInCart] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const { cartData } = useSelector((state) => state.cart);

    async function fetchProductDetails() {
        const details = await dispatch(getProductDetail(productId));
        setProductDetails(details.payload.data.res);

        // ✅ sync with cart
        const existingItem = cartData.find(item => item.productId === productId);
        if (existingItem) {
            setIsInCart(true);
            setQuantity(existingItem.quantity);
        }
    }

    async function handleAddCart() {
        const response = await dispatch(addProductToCart(productId));
        if (response.payload.data.success) {
            setIsInCart(true);
            setQuantity(1);
            dispatch(getCart());
        }
    }

    async function handleIncrease() {
        const response = await dispatch(addProductToCart(productId)); // ✅ +1
        if (response.payload.data.success) {
            setQuantity(quantity + 1);
            dispatch(getCart());
        }
    }

    async function handleDecrease() {
        const response = await dispatch(removeProductFromCart(productId)); // ✅ -1
        if (response.payload.data.success) {
            if (quantity > 1) {
                setQuantity(quantity - 1);
            } else {
                setIsInCart(false);
                setQuantity(1);
            }
            dispatch(getCart());
        }
    }

    useEffect(() => {
        fetchProductDetails();
    }, [productId, cartData]);

    if (!productDetails || !productDetails.productName) {
        return <div className="loading">Loading product details...</div>;
    }

    return (
        <Layout>
        <section className="product-details">
            <div className="product-details-container">

                {/* Left side: Product Image */}
                <div className="product-image">
                    <img src={productDetails.productImage} alt={productDetails.productName} />
                    <span className={`badge ${productDetails.foodType === "veg" ? "veg" : "non-veg"}`}>
                        {productDetails.foodType}
                    </span>
                </div>

                {/* Right side: Info */}
                <div className="product-info">
                    <h1 className="product-title">{productDetails.productName}</h1>
                    <p className="product-category">Category: {productDetails.category}</p>
                    <p className="product-description">
                        {productDetails.inStock ? "Freshly baked & available!" : "Currently out of stock"}
                    </p>
                    <p className="product-quantity">Available Quantity: {productDetails.quantity}</p>
                    <p className="product-price">₹{productDetails.price}</p>

                    {/* Ratings */}
                    <div className="product-rating">
                        {"⭐".repeat(Math.floor(productDetails.rating || 0))}
                        {"☆".repeat(5 - Math.floor(productDetails.rating || 0))}
                        <span className="rating-score"> ({productDetails.rating || "0"} / 5)</span>
                        <span className="reviews"> ({productDetails.reviewsCount || 0} reviews)</span>
                    </div>

                    {/* ✅ Actions */}
                    {isInCart ? (
                        <div className="quantity-controls">
                            <button onClick={handleDecrease}>-</button>
                            <span>{quantity}</span>
                            <button onClick={handleIncrease}>+</button>
                        </div>
                    ) : (
                        <button onClick={handleAddCart} className="add-to-cart-btn">🛒 Add to cart</button>
                    )}
                </div>
            </div>
        </section>
        </Layout>
    );
}

export default ProductDetails;


