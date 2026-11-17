import '../css/Layout.css'
import logo from '../assets/pizzalogo-removebg-preview.png'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/slices/authSlice';
import { ShoppingCart } from 'lucide-react'; // ✅ cart icon
import { getCart } from '../redux/slices/CartSlice';
import { useEffect } from 'react';

function Layout({ children }) {

    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const cartData = useSelector((state) => state.cart); // ✅ get cart data
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // console.log(cartData.cartData.cart.items);
    useEffect(() => {
            // dispatch(getAllProducts());
            dispatch(getCart());
        }, [])
    

    async function handleButton(e) {
        e.preventDefault();
        const apiResponse = await dispatch(logout());
        if (apiResponse.payload?.data?.success) {
            navigate('/auth/login');
        }
    }

    return (
        <>
            <nav>
                <div className="logo-container">
                    <img src={logo} alt="" className="logo" />
                    Pizza App
                </div>
                <div className="option-log-container">
                    <div className="nav-options">
                        <ul>
                            <li><Link to={"/"}>Home</Link></li>
                            <li><Link to={"/product"}>Menu</Link></li>
                            <li>Order</li>
                            <li>Contact us</li>
                        </ul>
                    </div>

                    {/* ✅ Cart Icon with item count */}
                    <div className="cart-container">
                        <Link to="/cart" className="cart-link">
                            <ShoppingCart size={24} />
                            {cartData?.cartData?.cart?.items?.length > 0 && (
                                <span className="cart-count">
                                    {cartData.cartData.cart.items.reduce((total, item) => total + item.quantity, 0)}
                                </span>
                            )}

                        </Link>
                    </div>

                    <div>
                        {isLoggedIn ?
                            <Link onClick={handleButton} className="log-container"> log-out </Link> :
                            <Link to="/auth/login" className="log-container"> log-in </Link>
                        }
                    </div>
                </div>
            </nav>

            {children}

            <footer>
                <div className="footer-container">
                    <div className="footer-logo">
                        <img src={logo} alt="" className="logo" />
                        <span>Pizza App</span>
                    </div>

                    <div className="footer-links">
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                            <li>Support</li>
                        </ul>
                    </div>

                    <div className="footer-copy">
                        © {new Date().getFullYear()} Pizza App. All Rights Reserved.
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Layout;
