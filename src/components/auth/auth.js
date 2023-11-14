// import React, { useState } from "react";
// import Input from "./Input";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// import { signin, signup } from "../../actions/auth";
// import Spinnerr from "../Spinner";
// import './auth.css'
// import { Button } from "react-bootstrap";
// import { CircularProgress } from "@mui/material";
// const Auth = () => {

  
//   const initial = {
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   };
//   const [formData, setFormData] = useState(initial);
//   const [message, setMessage] = useState("");
//   const [showSpinner, setShowSpinner] = useState(false);
//   const { authData } = useSelector((state) => state.auth);
//   const [isSignup, setIsSignup] = useState(false);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const initial2 = {

//     firstName:"",
//     email: "",
//     password: "",

//   }

//   const [data, setData] = useState(initial2);

//   const handleChange = (e) => {
//     e.preventDefault();

//     setFormData({ ...formData, [e.target.name]: e.target.value });

//     setData({...data, [e.target.name]: e.target.value})
//     const { name, value } = e.target;
//     setValidation((prevValidation) => ({
//       ...prevValidation,
//       [name]: value.trim() !== '', 
//     }));
//   };
//   const switchMode = (e) => {
//     e.preventDefault();

//     setIsSignup((e) => !e);
//   };

//   //console.log("CG+HAT LOG",data);




//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const isValid = Object.values(validation).every((field) => field);

//     if (!isValid) {
//       setMessage("Please fill in all required fields.");
//       return;
//     }

    
//     setShowSpinner(true);

//     if (!isSignup) {
//       await dispatch(signup(formData, navigate, setMessage, setShowSpinner));
//     } else {
//       await dispatch(signin(formData, navigate, setMessage, setShowSpinner));
//     }



//     try {
//       const res = await fetch(
//         `http://localhost:8000/api/${isSignup ? "login" : "register"}`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(data,console.log("CHAT LOGIN ",data,"CHAT LOGIN NEW")),
          
//         }
//       );
   

//       if (res.status === 200) {
//         const resData = await res.json();
//         if (resData.token) {
//           localStorage.setItem("user:token", resData.token);
//           localStorage.setItem("user:detail", JSON.stringify(resData.user));
//           console.log("LOCAL STORAGE",resData.user);
         
//         }
//       } else {
//         const resData = await res.json();
//         if (resData.token) {
//           localStorage.setItem("user:token", resData.token);
//           localStorage.setItem("user:detail", JSON.stringify(resData.user));
//           console.log("LOCAL STORAGE",resData.user);
//           //navigate("/");
//         }
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("An error occurred. Please try again.");
//     }



//     setShowSpinner(false);
//   };

  
//   const [validation, setValidation] = useState({
//     firstName: true,
//     lastName: true,
//     email: true,
//     password: true,
//     confirmPassword: true,
//   });
  
  


//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   setShowSpinner(true);

//   //   if (!isSignup) {
//   //     dispatch(signup(formData, navigate, setMessage, setShowSpinner));
//   //   } else {
//   //     dispatch(signin(formData, navigate, setMessage, setShowSpinner));
//   //   }
//   // };
  
  
  
//   return (
//  <div className="container">
//      <div className="AuthContainer main-cont">
//       <div className="ctn">
//         <div className="left">
//           {/* <img src={"https://i.ibb.co/dcmRt65/09-Well-Friendship-medium-Square-At3-X-v3.jpg"} className="logo" /> */}

//           <img src={"https://i.ibb.co/nrFtYWN/2.jpg"}className="logo"></img>
          
//           <h4 className="h4">
//   Connect with friends and the world around you on{' '}
//   <small style={{ color: '#2eb3gg', fontStyle: 'italic',fontSize:"30px" }}>FriendNet</small> social.
// </h4>

//         </div>



        
//         <div className="auth">
//           <div className="auth2">
//             <form className="form" >
//               {!isSignup && (
//                 <>

              
//                   <Input
//                     required
//                     placeholder="First Name"
//                     name="firstName"
//                     type="text"
//                     handleChange={handleChange}
//                     className="i1"
//                     value={data.firstName}
//                     onChange={(e) =>
//                       setData({ ...data, firstName: e.target.value })
//                     }
                   
//                   />
                 
//                   <Input
//                     placeholder="Last Name"
//                     name="lastName"
//                     type="text"
//                     handleChange={handleChange}
//                     className="i2"
//                     required
//                   />


//                 </>
//               )}
//               <Input
//                 required
//                 placeholder="Email Address"
//                 name="email"
//                 type="email"
//                 handleChange={handleChange}
//                 value={data.email}
//                 onChange={(e) => setData({ ...data, email: e.target.value })}
//               />
//               <Input
//               required
//                 placeholder="Password"
//                 name="password"
//                 type="password"
//                 handleChange={handleChange}
//                 value={data.password}
//                 onChange={(e) => setData({ ...data, password: e.target.value })}
//               />
//               {!isSignup && (
//                 <>
               
//                   <Input
//                   required
//                     placeholder="Confirm Password"
//                     type="password"
//                     name="confirmPassword"
//                     handleChange={handleChange}
//                   />
//                 </>
//               )}
//             </form>

            
//             <Button style={{width: "70%",marginTop:"18px"}} onClick={handleSubmit} className="loginBtn button">
//               {!isSignup ? "Sign Up" : "Sign In"}
//             </Button>
//             <div  className="border"> </div>
//             <p style={{ textAlign: "center", color: "red" }}>{message}</p>
//             <Button style={{borderRadius: "10px",backgroundColor: "#42b72a"}} onClick={switchMode} className="signIn button">
//               {!isSignup
//                 ? "Already have an account? Sign in"
//                 : "Don't have an account? Sign Up"}
//             </Button>
//             <div style={{margin:"10px"}}>
//             {showSpinner && <CircularProgress />}

            

//             </div>
            
//           </div>
//         </div>
//       </div>
//     </div>
//  </div>
//   );
// };

// export default Auth;












// Auth.jsx

import React, { useState } from 'react';
import Input from './Input';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { signin, signup } from '../../actions/auth';
import Spinnerr from '../Spinner';
import './auth.css';
import { Button } from 'react-bootstrap';
import { CircularProgress } from '@mui/material';
import Swal from 'sweetalert2';
const Auth = () => {
  const initial = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const [formData, setFormData] = useState(initial);
  const [message, setMessage] = useState('');
  const [showSpinner, setShowSpinner] = useState(false);
  const { authData } = useSelector((state) => state.auth);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initial2 = {
    firstName: '',
    email: '',
    password: '',
  };

  const [data, setData] = useState(initial2);

  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
    setData({ ...data, [name]: value });

    // Validate email
    if (name === 'email') {
      const emailRegex = /^\S+@\S+\.\S+$/;
      setValidation((prevValidation) => ({
        ...prevValidation,
        [name]: emailRegex.test(value),
      }));
    } else {
      setValidation((prevValidation) => ({
        ...prevValidation,
        [name]: value.trim() !== '',
      }));
    }
  };

  const switchMode = (e) => {
    e.preventDefault();
    setIsSignup((e) => !e);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowSpinner(true);

    // Validation check before dispatching action
    if (Object.values(validation).every((valid) => valid)) {
      if (!isSignup) {
        await dispatch(signup(formData, navigate, setMessage, setShowSpinner));
      } else {
        await dispatch(signin(formData, navigate, setMessage, setShowSpinner));
      }

      try {
        const res = await fetch(`http://localhost:8000/api/${isSignup ? 'login' : 'register'}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data, console.log('CHAT LOGIN ', data, 'CHAT LOGIN NEW')),
        });

        if (res.status === 200) {
          const resData = await res.json();
          if (resData.token) {
            localStorage.setItem('user:token', resData.token);
            localStorage.setItem('user:detail', JSON.stringify(resData.user));
            console.log('LOCAL STORAGE', resData.user);
          }
        } else {
          const resData = await res.json();
          if (resData.token) {
            localStorage.setItem('user:token', resData.token);
            localStorage.setItem('user:detail', JSON.stringify(resData.user));
            console.log('LOCAL STORAGE', resData.user);
            //navigate("/");
          }
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
      }

      setShowSpinner(false);
    } else {





  
  


      // Use SweetAlert2 for the alert
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill in all required fields with valid information.',
      });
      setShowSpinner(false);
      return; // Exit the function if no text or file is provided
    
      //alert('Please fill in all required fields with valid information.');
     
    }
  };

  const [validation, setValidation] = useState({
    firstName: true,
    lastName: true,
    email: true,
    password: true,
    confirmPassword: true,
  });

  return (
    <div className="container">
      <div className="AuthContainer main-cont">
        <div className="ctn">
          <div className="left">
            <img src={'https://i.ibb.co/nrFtYWN/2.jpg'} className="logo" alt="logo" />
            <h4 className="h4">
              Connect with friends and the world around you on{' '}
              <small style={{ color: '#2eb3gg', fontStyle: 'italic', fontSize: '30px' }}>FriendNet</small> social.
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
                    />
                    {!validation.firstName && (
                      <p style={{color:"red"}} className="error-message">First Name is required.</p>
                    )}
                    <Input
                      placeholder="Last Name"
                      name="lastName"
                      type="text"
                      handleChange={handleChange}
                      className="i2"
                      required
                    />
                    {!validation.lastName && (
                      <p style={{color:"red"}} className="error-message">Last Name is required.</p>
                    )}
                  </>
                )}
                <Input
                  placeholder="Email Address"
                  name="email"
                  type="email"
                  handleChange={handleChange}
                  value={data.email}
                  required
                  pattern="[a-z0-9._%+-]+@gmail\.com"
                />
                {!validation.email && (
                  <p  style={{color:"red"}} className="error-message">Please enter a valid Gmail address.</p>
                )}
                <Input
                  placeholder="Password"
                  name="password"
                  type="password"
                  handleChange={handleChange}
                  value={data.password}
                  required
                />
                {!validation.password && (
                  <p style={{color:"red"}} className="error-message">Password is required.</p>
                )} 
                {!isSignup && (
                  <>
                    <Input
                      placeholder="Confirm Password"
                      type="password"
                      name="confirmPassword"
                      handleChange={handleChange}
                      required
                    />
                    {!validation.confirmPassword && (
                      <p style={{color:"red"}} className="error-message">Confirm Password is required.</p>
                    )}
                  </>
                )}
              </form>
              <Button
                style={{ width: '70%', marginTop: '18px' }}
                onClick={handleSubmit}
                className="loginBtn button"
              >
                {!isSignup ? 'Sign Up' : 'Sign In'}
              </Button>
              <div className="border"> </div>
              <p style={{ textAlign: 'center', color: 'red' }}>{message}</p>
              <Button
                style={{ borderRadius: '10px', backgroundColor: '#42b72a' }}
                onClick={switchMode}
                className="signIn button"
              >
                {!isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up"}
              </Button>
              <div style={{ margin: '10px' }}>
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
