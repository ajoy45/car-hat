
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const navigate = useNavigate()
    const emailRef = useRef("");
    const passwordRef = useRef('');
    const handelSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        // console.log(email,password)
        signInWithEmailAndPassword(email, password)
    }
    const navigateToResister = () => {
        navigate('/resister')
    }
    if (user) {
        navigate(from, { replace: true });
    }
    let elementError;
    if (error) {
        elementError = <p>{error?.message}</p>
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        toast('Sent email');
    }
    return (
        <div className='container w-50 mx-auto mt-3 mb-5'>
            <h1 className='text-secondary text-center'>Login</h1>
            <Form onSubmit={handelSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                {elementError}
                <Button variant="primary" className='btn btn-primary mx-auto w-50 d-block' type="submit">
                    Login
                </Button>
            </Form>

            <p>New to car hat? <Link to="/resister" onClick={navigateToResister} className='text-danger text-decoration-none fs-4'>please resister!!</Link></p>
            <button className='btn btn-link text-decoration-none'>
                <p onClick={resetPassword}>Forget password? Reset</p>
            </button>
            <ToastContainer />
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;