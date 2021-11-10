import React, { useEffect, useState } from 'react';

const ManageAllOrder = () => {
    const [allOrders, setAllOrders] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/orderItems')
        .then(res => res.json())
        .then(data => setAllOrders(data))
    },[])

    return (
        <div>
            <h1>{allOrders.length}</h1>
        </div>
    );
};

export default ManageAllOrder;