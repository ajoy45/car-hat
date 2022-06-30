import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const Order = () => {
    const [order, setOrder] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        const email = user.email;
        const url = `https://young-hamlet-34340.herokuapp.com/order?email=${email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [user])
    return (
        <div>
            <h1>this is order page:{order.length}</h1>
        </div>
    );
};

export default Order;