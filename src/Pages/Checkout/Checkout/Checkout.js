import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const Checkout = () => {
    const [user] = useAuthState(auth);
    const {serviceId} = useParams();
    const [service] = useServiceDetail(serviceId);

    // const [user,setUser] = useState({
    //     name:'Akbar The great',
    //     email:'akbar@gmail.com',
    //     address:'Tajmohol Road Md.pur',
    //     phone:'01711111111'
    // });

    // const handleAddressChange = event =>{
    //     console.log(event.target.value);
    //     const {address,...rest} = user;
    //     const newAddress = event.target.value;
    //     const newUser = {address: newAddress,...rest};
    //     setUser(newUser);
    //     console.log(address,rest);
    // }
    const handlePlaceOrder = event =>{
        event.preventDefault();
        const order ={
            email:user.email,
            service:service.name,
            serviceId:serviceId,
            address:event.target.address.value,
            phone:event.target.phone.value
        }

        axios.post('http://localhost:5000/order',order)
        .then(response =>{
            const{data} = response;
            if(data.insertedId){
                toast('Your order is booked');
                event.target.reset();
            }
        })
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>Please Order: {service.name}</h2>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2'  type="text" value={user?.displayName} name="name" placeholder='name' id="" required readOnly disabled /><br />
                <input className='w-100 mb-2'  type="text" name="email" value={user?.email} placeholder='email' id="" required readOnly disabled /><br />
                <input className='w-100 mb-2'  type="text" value={service.name} name="service" placeholder='service' id="" required /><br />
                <input className='w-100 mb-2'  type="text"  name="address"  placeholder='address' id="" autoComplete='off' required /><br />
                <input className='w-100 mb-2'  type="text"  name="phone" placeholder='phone' id="" required /><br />
                <input className='btn btn-primary' type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default Checkout;