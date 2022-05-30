import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Resister.css';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from "../firebase.init"
import SocialLogin from '../pagess/Login/SocialLogin/SocialLogin';
const Resister = () => {
    const[agree,setAgree]=useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();
    const navigateToLogin = () => {
        navigate('/login')
    }
    if (user) {
        console.log(user)
    }
    const handelResister = async(event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log(name,email,password)
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName:name });
        console.log('Updated profile');
        navigate("/home")
    }
    return (
        <div className='container-form'>
            <h1 className='text-center text-primary'>pleaaase resister</h1>
            <form onSubmit={handelResister}>

                <input type="text" name="name" id="" placeholder='your name' />
                <input type="email" name="email" id="" placeholder="email address" required />
                <input type="password" name="password" id="" placeholder="Type passward" required />
                <input disabled={!agree} type="submit" value="Resister" />
                <input onClick={()=>setAgree(!agree)} type="checkbox" name="terms and condition" id=""required />
                <label className={agree?"text-primary":"text-danger"} htmlFor="terms">Terms and condition  </label>
            </form>
            <p>already resister? <Link to="/login" className='text-danger text-decoration-none fs-4' onClick={navigateToLogin}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Resister;