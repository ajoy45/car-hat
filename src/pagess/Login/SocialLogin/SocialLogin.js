import React from 'react';

const SocialLogin = () => {
    return (
        <div >
            <div className='d-flex align-items-center'>
                <div style={{ height: "1px" }} className='w-50 bg-primary'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: "1px" }} className='w-50 bg-primary'></div>
            </div>
            <div className='text-center'>
                <button className='btn bg-secondary w-50 text-white'>Google Login</button><br></br>
                <button className='btn bg-primary w-50 mt-2 text-white'>Social Loging</button>

            </div>

        </div>
    );
};

export default SocialLogin;