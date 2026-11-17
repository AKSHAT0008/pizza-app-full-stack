import '../../css/log-in.css'
import singup from '../../assets/signup.png'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/slices/authSlice';
function Login() {

const [logindata, setLoginData] = useState({
    email: '',
    password: ''
})
const dispatch = useDispatch()
 const navigate = useNavigate();
function handleUserInput(e){
    const {name, value} = e.target;
    setLoginData({
        ...logindata,
        [name]: value
    })
}

async function handleButton(e) {
        e.preventDefault(); //by default buttons reloads the page, it will help to prevent it
        if (!logindata.email.trim()) {
            toast.dismiss();
            toast.error("Email is required");
            return;
        } else if (!/\S+@\S+\.\S+/.test(logindata.email)) {
            toast.dismiss();
            toast.error("Enter a valid email address");
            return; 
        } if (!logindata.password.trim()) {
            toast.dismiss();
            toast.error("Password is required");
            return;
        } 
        const apiResponse = await dispatch(login(logindata))
         console.log("api res:" , (apiResponse));
        if(apiResponse.payload.data.success){
            navigate('/')
        }
       

    }
    return (
        <>
            <div className="img-form-container">
                <img src={singup} alt="Image" className="signup-img" />
                <form>
                    <h2>Log in</h2>

                     

                    <label>Email:</label><br />
                    <input type="email" name="email" placeholder="John@example.com" onChange={handleUserInput} /><br /><br />

                    

                    <label>Password:</label><br />
                    <input type="password" name="password" placeholder="*****" onChange={handleUserInput}/><br /><br />

                    

                    <button type="submit" onClick={handleButton}>Log-in</button>
                    <p className="login-redirect">Don't have an account? <Link to="/auth/signup" className='signup-btn'> Sign-up </Link></p>
                </form>

            </div>
        </>
    )

}

export default Login;