import React from 'react';

import Useservicedetails from '../hooks/Useservisedetails';
import auth from '../../firebase.init'
import { useAuthState } from 'react-firebase-hooks/auth';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
const Ckeckout = () => {
    const [user] = useAuthState(auth);
    const { serviceId } = useParams();

    const [service] = Useservicedetails(serviceId);

    const handelPlaceorder = event => {
        event.preventDefault();
        const order = {
            name: user.displayName,
            email: user.email,
            service: service,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value

        }
        axios.post('https://young-hamlet-34340.herokuapp.com/order', order)
            .then(response => {
                console.log(response)
                const { data } = response;
                if (data.insertedId) {
                    toast('your order is complete')
                }
            })

    }


    //    const[user,setUser]=useState({
    //      name:'abul uddin',
    //      email:'abul@gmail.com',
    //      address:'kala bagan',
    //      phone:'01666666'
    //    })
    //    const handelAddress=(event)=>{
    //     // console.log(event.target.value)
    //     const newAddress=event.target.value;
    //     const{address,...rest}=user;
    //    const newUser={address:newAddress,...rest};
    //    console.log(newUser)
    //    setUser(newUser)

    //    }
    return (
        <div className='w-50 mx-auto'>
            <h1>please checout this:{service.name}</h1>
            <form onSubmit={handelPlaceorder} >
                <input className='w-100 mb-3' type="text" placeholder='name' value={user.displayName} name='name' readOnly disabled />
                <br />
                <input className='w-100 mb-3' type="email" placeholder='email' value={user.email} name='email' readOnly disabled />
                <br />
                <input className='w-100 mb-3' type="text" placeholder='service' value={service.name} />
                <br />
                <input className='w-100 mb-3' type="text" placeholder='address' name='address' autoComplete='of' />
                <br />

                <input className='w-100 mb-3' type="text" placeholder='phone number' name='phone' />
                <br />
                <input type="submit" value="order" />
            </form>
        </div>
    );
};

export default Ckeckout;