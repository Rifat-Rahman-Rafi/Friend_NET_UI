import React, { useState } from "react";
import Input from "./Input";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { signin, signup } from "../../actions/auth";
import Spinnerr from "../Spinner";
import './auth.css'
import { Button } from "react-bootstrap";
import { CircularProgress } from "@mui/material";
const Auth = () => {

  
  const initial = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formData, setFormData] = useState(initial);
  const [message, setMessage] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);
  const { authData } = useSelector((state) => state.auth);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [data, setData] = useState({
    firstName:"",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();

    setFormData({ ...formData, [e.target.name]: e.target.value });

    setData({...data, [e.target.name]: e.target.value})
  };
  const switchMode = (e) => {
    e.preventDefault();

    setIsSignup((e) => !e);
  };





  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowSpinner(true);

    if (!isSignup) {
      await dispatch(signup(formData, navigate, setMessage, setShowSpinner));
    } else {
      await dispatch(signin(formData, navigate, setMessage, setShowSpinner));
    }



    try {
      const res = await fetch(
        `http://localhost:8000/api/${isSignup ? "login" : "register"}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
          
        }
      );
   

      if (res.status === 200) {
        const resData = await res.json();
        if (resData.token) {
          localStorage.setItem("user:token", resData.token);
          localStorage.setItem("user:detail", JSON.stringify(resData.user));
          console.log("LOCAL STORAGE",resData.user);
        }
      } else {
        const resData = await res.json();
        if (resData.token) {
          localStorage.setItem("user:token", resData.token);
          localStorage.setItem("user:detail", JSON.stringify(resData.user));
          console.log("LOCAL STORAGE",resData.user);
          //navigate("/");
        }
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }



    setShowSpinner(false);
  };

  


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setShowSpinner(true);

  //   if (!isSignup) {
  //     dispatch(signup(formData, navigate, setMessage, setShowSpinner));
  //   } else {
  //     dispatch(signin(formData, navigate, setMessage, setShowSpinner));
  //   }
  // };
  
  
  
  return (
 <div className="container">
     <div className="AuthContainer main-cont">
      <div className="ctn">
        <div className="left">
          <img src={"https://i.ibb.co/dcmRt65/09-Well-Friendship-medium-Square-At3-X-v3.jpg"} className="logo" />
          
          <h4 className="h4">
          Connect with friends and the world
around you on FriendNet social.
          </h4>
        </div>

        
        <div className="auth">
          <div className="auth2">
            <form className="form">
              {!isSignup && (
                <>
                  <Input
                    placeholder="First Name"
                    name="firstName"
                    type="text"
                    handleChange={handleChange}
                    className="i1"
                    value={data.firstName}
                    onChange={(e) =>
                      setData({ ...data, firstName: e.target.value })
                    }
                  />
                  <Input
                    placeholder="Last Name"
                    name="lastName"
                    type="text"
                    handleChange={handleChange}
                    className="i2"
                  />
                </>
              )}
              <Input
                placeholder="Email Address"
                name="email"
                type="email"
                handleChange={handleChange}
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
              <Input
                placeholder="Password"
                name="password"
                type="password"
                handleChange={handleChange}
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
              {!isSignup && (
                <>
                  <Input
                    placeholder="Confirm Password"
                    type="password"
                    name="confirmPassword"
                    handleChange={handleChange}
                  />
                </>
              )}
            </form>
            <Button style={{width: "70%",marginTop:"18px"}} onClick={handleSubmit} className="loginBtn button">
              {!isSignup ? "Sign Up" : "Sign In"}
            </Button>
            <div  className="border"> </div>
            <p style={{ textAlign: "center", color: "red" }}>{message}</p>
            <Button style={{borderRadius: "10px",backgroundColor: "#42b72a"}} onClick={switchMode} className="signIn button">
              {!isSignup
                ? "Already have an account? Sign in"
                : "Don't have an account? Sign Up"}
            </Button>
            <div style={{margin:"10px"}}>
            {showSpinner && <CircularProgress />}

            </div>
            
          </div>
        </div>
      </div>
    </div>
 </div>
  );
};

export default Auth;



// import { registerUser, loginUser } from './authService'; // Import the authService functions

// const Auth = () => {
  
   
//   const [formData, setFormData] = useState({ fullName: '', email: '', password: '' });
//   const [isLogin, setIsLogin] = useState(true);
//   const [error, setError] = useState('');

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       if (isLogin) {
//         // Login
//         const response = await loginUser({ email: formData.email, password: formData.password });
//         localStorage.setItem('token', response.token);
//         // Redirect to the desired page after successful login
       
//       } else {
//         // Registration
//         const response = await registerUser({
//           fullName: formData.fullName,
//           email: formData.email,
//           password: formData.password,
//         });
//         // Display a success message or handle it as needed
//         console.log('Registration successful:', response.message);
//         // Switch to the login form after registration
//         setIsLogin(true);
//       }
//     } catch (err) {
//       setError(err.message || 'An error occurred');
//     }
//   };

//   return (
//     <div>
//       <h2>{isLogin ? 'Login' : 'Register'}</h2>
//       <form onSubmit={handleSubmit}>
//         {!isLogin && (
//           <div>
//             <label htmlFor="fullName">Full Name</label>
//             <input type="text" name="fullName" id="fullName" onChange={handleInputChange} />
//           </div>
//         )}
//         <div>
//           <label htmlFor="email">Email</label>
//           <input type="email" name="email" id="email" onChange={handleInputChange} />
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <input type="password" name="password" id="password" onChange={handleInputChange} />
//         </div>
//         <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
//         <p>{error}</p>
//       </form>
//       <p>
//         {isLogin ? "Don't have an account? " : 'Already have an account? '}
//         <button onClick={() => setIsLogin(!isLogin)}>{isLogin ? 'Register' : 'Login'}</button>
//       </p>
//     </div>
//   );
// };

// export default Auth;
