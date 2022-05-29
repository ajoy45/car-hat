import React from 'react';
import google from "../../../Images/Social/google logo.png";
import facebook from "../../../Images/Social/facebook.png";
import github from "../../../Images/Social/github.png";
const SocialLogin = () => {
    return (
        <div >
            <div className='d-flex align-items-center'>
                <div style={{ height: "1px" }} className='w-50 bg-primary'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: "1px" }} className='w-50 bg-primary'></div>
            </div>
            <div className='text-center'>
                <button className='btn bg-secondary w-50 text-white'>
                    <img style={{ width: "30px" }} src={google} alt=''></img>   Google Login
                </button>
                <br></br>
                <button className='btn bg-primary w-50 mt-2 text-white'>
                <img style={{width:"30px"}} src={github}alt=''></img>   Social Loging
                </button>
                <br></br>
                <button className='btn bg-primary w-50 mt-2 text-white'>
                <img style={{width:"30px"}} src={facebook}alt=''></img>   Github Login
                </button>

            </div>

        </div>
    );
};

export default SocialLogin;