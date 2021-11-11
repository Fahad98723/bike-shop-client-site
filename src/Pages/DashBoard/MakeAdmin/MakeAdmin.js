import React, { useState } from 'react';
import { Alert, Col, Container, Row } from 'react-bootstrap';
import img1 from '../../../images/admin.png'
const MakeAdmin = () => {
    const [email , setEmail] = useState('')
    const [adminAdded, setAdminAdded] = useState(false)
    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleMakeAdmin = () => {
        const user = {email}
        fetch('https://shielded-inlet-60219.herokuapp.com/users/admin', {
            method : 'PUT',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                setAdminAdded(true)
            }
        })
    }
    return (
        <div>
            <Container>
            <Row>               
                <Col lg='6' sm='12'>
                    <div className="heading mb-5">
                        <h3>Want to make anyone Admin</h3>
                        <h1>Make Admin Here</h1>
                    </div>
                <input placeholder="User's Email" className='w-100 mb-3 p-2' onBlur={handleOnBlur} type="email"/>
                <button onClick= {handleMakeAdmin} className='btn btn-warning'>Make Admin</button> {
                    adminAdded && <Alert  variant='success'>
                    You Added Admin Successfully .
                </Alert>
                }
                </Col>
                <Col lg='6' sm='12'>
                <img src={img1} alt="" className="img-fluid" />
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default MakeAdmin;