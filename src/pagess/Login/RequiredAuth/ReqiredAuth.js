import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  

const ReqiredAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(
        auth
    );
    if (loading) {
        return <Spinner className=' text-secondary ' animation="border" variant="primary" />
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    if (user.providerData[0]?.providerId==="password" && !user.emailVerified) {
        return <div>
            <h3>email not varified</h3>
            <h3>please email varification</h3>
            <button
                onClick={async () => {
                    await sendEmailVerification();
                    toast('Email varification sending...');
                }}
            >
                Verify email
            </button>
            
        </div>
    }
    return children
};

export default ReqiredAuth;