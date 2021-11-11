import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';

const ManageAllOrder = () => {
    const [allOrders, setAllOrders] = useState([])
    useEffect(() => {
        fetch('https://shielded-inlet-60219.herokuapp.com/orderItems')
        .then(res => res.json())
        .then(data => setAllOrders(data))
    },[allOrders])
    const handleDelete  = id => {
        const confirm = window.confirm("Are You Sure You Want To Cancel ?")
        if (confirm) {
            fetch(`https://shielded-inlet-60219.herokuapp.com/orderItems/${id}`,{
            method : "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount) {
                alert('You cancel order successfully')
                const remaining = allOrders.filter(order => order._id !== id)
                setAllOrders(remaining)
            }
        })
        }    
    }
    const handleUpdate = id => {
        const data = allOrders.find(order => order._id === id)
        const dataUpdate = {...data}
        dataUpdate.status = 'Approved'
        fetch(`https://shielded-inlet-60219.herokuapp.com/orderItems/${id}`,{
            method : "PUT",
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(dataUpdate)
        })
    }
    return (
        <div>
            <Container>
            <Table striped bordered hover responsive className='text-center '>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Bike Name</th>
                    <th>Address</th>
                    <th>Zip</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Update Status</th>
                    <th>Order Cancel</th>
                    </tr>
                </thead>
                <tbody>
                    {allOrders.map(order => 
                    <tr>
                    <td>{order.name}</td>
                    <td>{order.address}</td>
                    <td>{order.zip}</td>
                    <td>{order.bikeName}</td>
                    <td>$ {order.price}</td>
                    <td>{
                        order.status === 'Pending' ? <button className="btn btn-danger ">{order.status}</button> : <button className="btn btn-success ">{order.status}</button>
                        }
                    </td>
                    <td><button onClick={() => handleUpdate(order._id)} className="btn btn-warning ">Update</button></td>
                    <td ><i onClick={() => handleDelete(order._id)} className="fas fa-trash-alt"></i></td>
                    </tr>
                    )}
                </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default ManageAllOrder;