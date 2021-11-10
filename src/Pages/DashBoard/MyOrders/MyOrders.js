import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';


const MyOrders = () => {
    const {user} = useAuth()
    const [myOrders, setMyOrders] = useState([])
    const email = user?.email
    useEffect(() => {
        fetch(`http://localhost:5000/orderItems?email=${email}`)
        .then(res => res.json())
        .then(data => setMyOrders(data))
    },[email])
    return (
        <div>
            {
                myOrders.length
            }
        </div>
    );
};

export default MyOrders;