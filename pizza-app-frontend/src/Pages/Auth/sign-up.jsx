import '../../css/sign-up.css'
import singup from '../../assets/signup.png'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';
import { createAccount } from '../../redux/slices/authSlice';


function Signup() {

    const dispatch = useDispatch();

    const [signup, setsignup] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        password: ''
    })
    //  const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();

    function handleUserInput(e) {
        const { name, value } = e.target;
        console.log(e.target);
        
        setsignup({
            ...signup,
            [name]: value
        })
    }

    async function handleButton(e) {
        e.preventDefault(); //by default buttons reloads the page, it will help to prevent it
        console.log(signup);

        if (!signup.firstName.trim()) {
            toast.dismiss();
            toast.error("First name is required");
            return;
        }
        if (!signup.lastName.trim()) {
            toast.dismiss();
            toast.error("Last name is required");
            return;
        }

        if (!signup.email.trim()) {
            toast.dismiss();
            toast.error("Email is required");
            return;
        } else if (!/\S+@\S+\.\S+/.test(signup.email)) {
            toast.dismiss();
            toast.error("Enter a valid email address");
            return;
        } if (!signup.mobileNumber.trim()) {
            toast.dismiss();
            toast.error("Mobile number is required");
            return;
        } else if (!/^[6-9]\d{9}$/.test(signup.mobileNumber)) {
            toast.dismiss();
            toast.error("Enter a valid 10-digit mobile number");
            return;
        } if (!signup.password.trim()) {
            toast.dismiss();
            toast.error("Password is required");
            return;
        } else if (signup.password.length < 8) {
            toast.dismiss();
            toast.error("Password must be at least 8 characters long");
            return;
        } else if (!/[A-Z]/.test(signup.password)) {
            toast.dismiss();
            toast.error("Password must contain at least one uppercase letter");
            return;
        } else if (!/[a-z]/.test(signup.password)) {
            toast.dismiss();
            toast.error("Password must contain at least one lowercase letter");
            return;
        } else if (!/[0-9]/.test(signup.password)) {
            toast.dismiss();
            toast.error("Password must contain at least one number");
            return;
        } else if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(signup.password)) {
            toast.dismiss();
            toast.error("Password must contain at least one special character");
            return;
        }
        const apiResponse = await dispatch(createAccount(signup))
         console.log("api res:" , (apiResponse));
        if(apiResponse.payload.data.success){
            navigate('/auth/login')
        }
       

    }
    


    return (
        <>
            <div className="img-form-container">
                <img src={singup} alt="Image" className="signup-img" />
                <form>
                    <h2>Sign Up</h2>

                    <label>First Name:</label><br />
                    <input type="text" name="firstName" placeholder="John" onChange={handleUserInput} /><br /><br />
                    
                    <label>Last Name:</label><br />
                    <input type="text" name="lastName" placeholder="Doe" onChange={handleUserInput} /><br /><br />

                    <label>Email:</label><br />
                    <input onChange={handleUserInput} type="email" name="email" placeholder="John@example.com" /><br /><br />

                    <label>Mobile:</label><br />
                    <input onChange={handleUserInput} type="tel" name="mobileNumber" placeholder="9999999999" /><br /><br />

                    <label>Password:</label><br />
                    <input onChange={handleUserInput} type="password" name="password" placeholder="*****" /><br /><br />

                    <button onClick={handleButton} type="submit">Create Account</button>
                    <p className="login-redirect">Already have an account? <Link to="/auth/login" className='login-btn'> login </Link> </p>
                </form>

            </div>
        </>
    )

}


export default Signup;