import React, { useEffect, useState } from 'react';
import { Container, ListGroup } from 'react-bootstrap';

const AdminPanel = () => {
    const [users, setUsers] = useState([])

    //all user collect from database
    useEffect(() => {
        fetch('https://shielded-inlet-60219.herokuapp.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])
    //collect admins from users
    const admins = users.filter(user => user?.role === 'admin')
    console.log(admins);
    return (
        <div>
            <Container>
            <div className="heading mb-5">
                    <h3>Here Is Our All Admin List</h3>
                    <h1>All Admins Are Here</h1>
            </div>
            {
                admins.map(admin => <ListGroup.Item variant='success' className='mb-3' as="li">
                <span className=' fw-bold'>Name</span> : {admin.name}   <span className='ms-5 fw-bold'>Email</span> : {admin.email}
                </ListGroup.Item> )
            }
            </Container>
        </div>
    );
};

export default AdminPanel;