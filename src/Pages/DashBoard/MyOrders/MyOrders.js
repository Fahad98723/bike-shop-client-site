import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';


const MyOrders = () => {
    const {user} = useAuth()
    const [myOrders, setMyOrders] = useState([])
    const email = user?.email
    useEffect(() => {
        fetch(`https://shielded-inlet-60219.herokuapp.com/orderItems?email=${email}`)
        .then(res => res.json())
        .then(data => setMyOrders(data))
    },[email])
    const handleDelete  = id => {
        const confirm = window.confirm("Are You Sure You Want To Cancel ?")
        if (confirm) {
            fetch(`https://shielded-inlet-60219.herokuapp.com/orderItems/${id}`,{
            method : "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount) {
                alert('Order Cancel Successfully')
                const remaining = myOrders.filter(order => order._id !== id)
                setMyOrders(remaining)

            }
        })
        }
        
    }
    return (
        <div>
            <Container>
            <Table striped bordered hover responsive className='text-center '>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Bike Name</th>
                    <th>Price</th>
                    <th className='text-center'>Status</th>
                    <th>Order Cancel</th>
                    </tr>
                </thead>
                <tbody>
                    {myOrders.map(order => 
                    <tr>
                    <td>{order.name}</td>
                    <td>{order.address}</td>
                    <td>{order.bikeName}</td>
                    <td>$ {order.price}</td>
                    <td>{
                        order.status === 'Pending' ? <button className="btn btn-danger ">{order.status}</button> : <button className="btn btn-success ">{order.status}</button>
                        }
                    </td>
                    <td className="text-center"><i onClick={() => handleDelete(order._id)} className="fas fa-trash-alt"></i></td>
                    </tr>
                    )}
                </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default MyOrders;