// import '../src/css/Home.css';
// import pizza1 from '../src/assets/pizza.png'
// import pizza2 from '../src/assets/pizza2.png'
// import pizzdel from '../src/assets/pizz-del.png'
// import dineIn from '../src/assets/dineIn.png'
// import takeAway from '../src/assets/take-away.webp'
// import Layout from './layouts/Layout';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { getAllProducts } from './redux/slices/ProductSlice';
// import { Link } from 'react-router-dom';
// import { getCart } from './redux/slices/CartSlice';

// function Home() {

//     const dispatch = useDispatch();
//     const { productData } = useSelector((state) => state.product)
//     useEffect(() => {
//         dispatch(getAllProducts());
//         dispatch(getCart());
//     }, [])

//     useEffect(() => {
//         console.log(productData); // will log [] first, then array when API resolves
//     }, []);

//     return (
//         <>
//             <Layout>
//                 <section className="hero">
//                     <div className="hero-content">
//                         <h1 className="section-head">Enjoy the slice ...</h1>
//                         <p className="in-section">Craving Solved in a Slice!</p>
//                         <div><button className="cta-btn">
//                             <span>Order Now</span>
//                             <span className="btn-icon">🍕</span>
//                         </button>
//                         </div>
//                     </div>
//                     <div className="image"><img src="../src/assets/pizza.png" alt="img" /></div>
//                 </section>
//                 <section className='service'>

//                     <div className="image"><img src={pizza2} alt="cook" /></div>
//                     <div className="service-content-container">
//                         <div className="service-content">
//                             <div className="service-content-heading">What Makes us Awwwsome?</div>
//                             <ul className='service-content-points'>
//                                 <li>Stone-Baked Goodnessss – Hand-tossed with 💛</li>
//                                 <li>For Every Craver – Veggie, meaty, vegan – all welcome</li>
//                                 <li>Toppin’ Overload – Your cravings, your way</li>
//                             </ul>
//                         </div>
//                         <div className="line"></div>
//                         <div className="card-container-outer">
//                             <div className="card-box">
//                                 <img className='card-img' src={pizzdel} alt="" />
//                                 <h1 className='heading'>Delivery</h1>
//                                 <p className='content'> “Craving pizza? We’ll bring the oven-fresh goodness straight to your door!”</p>
//                             </div>
//                             <div className="card-box">
//                                 <img className='card-img' src={takeAway} alt="" />
//                                 <h1 className='heading'>TakeAway</h1>
//                                 <p className='content'> “Grab your favorite slice on the go – hot, fast, and ready when you are!”

//                                 </p>
//                             </div>
//                             <div className="card-box">
//                                 <img className='card-img' src={dineIn} alt="" />
//                                 <h1 className='heading'>Dine-in</h1>
//                                 <p className='content'> “Savor every bite in our cozy space – where pizza meets good vibes!”</p>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//                 <section className="products">
//                     <h2 className="products-heading">Our Pizzas</h2>
//                     <div className="products-grid">
//                         {productData && productData.length > 0 ? (
//                             productData.map((product) => (
//                                 <div className="product-card" key={product._id}>
//                                     <Link to={`/product/${product._id}`}>
//                                     <img src={product.productImage} alt={product.productName} className="product-img" />
//                                     <h3 className="product-name">{product.productName}</h3>
//                                     <p className="product-price">₹{product.price}</p>
//                                     <span className={`badge ${product.foodType === "veg" ? "veg" : "non-veg"}`}>
//                                         {product.foodType}
//                                     </span>
//                                     </Link>
//                                 </div>
//                             ))
//                         ) : (
//                             <p className="no-products">No products available</p>
//                         )}
//                     </div>
//                 </section>

//             </Layout>
//         </>
//     );
// }

// export default Home;
import '../src/css/Home.css';
import pizza1 from '../src/assets/pizza.png'
import pizza2 from '../src/assets/pizza2.png'
import pizzdel from '../src/assets/pizz-del.png'
import dineIn from '../src/assets/dineIn.png'
import takeAway from '../src/assets/take-away.webp'
import Layout from './layouts/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { getAllProducts } from './redux/slices/ProductSlice';
import { Link } from 'react-router-dom';
import { getCart } from './redux/slices/CartSlice';

function Home() {
    const dispatch = useDispatch();
    const { productData } = useSelector((state) => state.product);

    const productsRef = useRef(null); // 🔥 ref for products section

    useEffect(() => {
        dispatch(getAllProducts());
        dispatch(getCart());
    }, [dispatch]);

    const scrollToProducts = () => {
        productsRef.current.scrollIntoView({ behavior: "smooth" }); // smooth scroll
    };

    return (
        <>
            <Layout>
                <section className="hero">
                    <div className="hero-content">
                        <h1 className="section-head">Enjoy the slice ...</h1>
                        <p className="in-section">Craving Solved in a Slice!</p>
                        <div>
                            <button className="cta-btn" onClick={scrollToProducts}>
                                <span>Order Now</span>
                                <span className="btn-icon">🍕</span>
                            </button>
                        </div>
                    </div>
                    <div className="image">
                        <img src={pizza1} alt="img" />
                    </div>
                </section>

                <section className='service'>
                    <div className="image"><img src={pizza2} alt="cook" /></div>
                    <div className="service-content-container">
                        <div className="service-content">
                            <div className="service-content-heading">What Makes us Awwwsome?</div>
                            <ul className='service-content-points'>
                                <li>Stone-Baked Goodnessss – Hand-tossed with 💛</li>
                                <li>For Every Craver – Veggie, meaty, vegan – all welcome</li>
                                <li>Toppin’ Overload – Your cravings, your way</li>
                            </ul>
                        </div>
                        <div className="line"></div>
                        <div className="card-container-outer">
                            <div className="card-box">
                                <img className='card-img' src={pizzdel} alt="" />
                                <h1 className='heading'>Delivery</h1>
                                <p className='content'> “Craving pizza? We’ll bring the oven-fresh goodness straight to your door!”</p>
                            </div>
                            <div className="card-box">
                                <img className='card-img' src={takeAway} alt="" />
                                <h1 className='heading'>TakeAway</h1>
                                <p className='content'> “Grab your favorite slice on the go – hot, fast, and ready when you are!”</p>
                            </div>
                            <div className="card-box">
                                <img className='card-img' src={dineIn} alt="" />
                                <h1 className='heading'>Dine-in</h1>
                                <p className='content'> “Savor every bite in our cozy space – where pizza meets good vibes!”</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 👇 Add ref here */}
                <section className="products" ref={productsRef}>
                    <h2 className="products-heading">Our Pizzas</h2>
                    <div className="products-grid">
                        {productData && productData.length > 0 ? (
                            productData.map((product) => (
                                <div className="product-card" key={product._id}>
                                    <Link to={`/product/${product._id}`}>
                                        <img src={product.productImage} alt={product.productName} className="product-img" />
                                        <h3 className="product-name">{product.productName}</h3>
                                        <p className="product-price">₹{product.price}</p>
                                        <span className={`badge ${product.foodType === "veg" ? "veg" : "non-veg"}`}>
                                            {product.foodType}
                                        </span>
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <p className="no-products">No products available</p>
                        )}
                    </div>
                </section>
            </Layout>
        </>
    );
}

export default Home;

