import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import google from "../../../Images/Social/google logo.png";
import facebook from "../../../Images/Social/facebook.png";
import github from "../../../Images/Social/github.png";
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const [signInWithFacebook] = useSignInWithFacebook(auth);
    const [signInWithGithub,error1,user1] = useSignInWithGithub(auth);

    let errorElement;
    if (error||error1) {
        errorElement=<div>
        <p>Error: {error.message} {error1.message}</p>
      </div>
          
      }
      if (user||user1) {
        navigate(from, { replace: true });
      }

    return (
        <div >
            <div className='d-flex align-items-center'>
                <div style={{ height: "1px" }} className='w-50 bg-primary'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: "1px" }} className='w-50 bg-primary'></div>
            </div>
            <div className='text-center'>
                <button onClick={()=>signInWithGoogle()} className='btn bg-secondary w-50 text-white'>
                    <img style={{ width: "30px" }} src={google} alt=''></img>   Google Login
                </button>
                {errorElement}
                <br></br>
                <button onClick={()=>signInWithGithub()} className='btn bg-primary w-50 mt-2 text-white'>
                <img  style={{width:"30px"}} src={github}alt=''></img>   Github Loging
                </button>
                <br></br>
                <button onClick={()=>signInWithFacebook()} className='btn bg-primary w-50 mt-2 text-white'>
                <img style={{width:"30px"}} src={facebook}alt=''></img>   Facebook Login
                </button>

            </div>

        </div>
    );
};

export default SocialLogin;