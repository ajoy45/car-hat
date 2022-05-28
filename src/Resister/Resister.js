import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Resister.css'
const Resister = () => {
    const navigate=useNavigate();
    const navigateToLogin=()=>{
           navigate('/login')
    }
    const handelResister=event=>{
        event.preventDefault();
        const name=event.target.name.value;
        const email=event.target.email.value;
        const password=event.target.password.value;
        console.log(name,email,password)
    }
    return (
        <div className='container-form'>
            <h1 className='text-center text-primary'>pleaaase resister</h1>
            <form onSubmit={handelResister}>
                
            <input type="text" name="name" id=""placeholder='your name' />
            <input type="email" name="email" id="" placeholder="email address" required/>
            <input type="password" name="password" id="" placeholder="Type passward" required/>
            <input type="submit" value="Resister" />
            </form>
            <p>already resister? <Link to="/login" className='text-danger text-decoration-none fs-4' onClick={navigateToLogin}>Please Login</Link></p>
        </div>
    );
};

export default Resister;