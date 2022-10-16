import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    if(user){
      navigate(from,{replace:true});
    }
    const handleSubmit = event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email,password);
        
    }

    const navigateRegister = event =>{
        navigate('/register');
    }

    const resetPassword = async()=>{
      const email = emailRef.current.value;
      await sendPasswordResetEmail(email);
      alert('Sent email');
    }

    let errorElement;
    if (error) {
       
        errorElement=<p className='text-danger'>Error: {error?.message} </p>
       
      }
  return (
    <div className="container w-50 mx-auto">
      <h2 className="text-primary text-center mt-2">Please log in</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" ref={emailRef} placeholder="Enter email" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="Password" />
        </Form.Group>
        
        <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
          Login
        </Button>
      </Form>
      {errorElement}
      <p>New to Genius Car? <Link to="/register" className="text-primary pe-auto text-decoration-none" onClick={navigateRegister} >Please Register</Link> </p>
      <p>New to Genius Car? <Link to="/register" className="text-primary pe-auto text-decoration-none" onClick={resetPassword} >Reset Password</Link> </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
