import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import purchaseImage from '../../images/purchase.png'
const Purchase = () => {
    const [purchase, setPurchase] = useState({})
    const {user} = useAuth()
    const {id}= useParams()
    const {name, image, details, price} = purchase
    
    useEffect(() => {
        fetch(`http://localhost:5000/bikes/${id}`)
        .then(res => res.json())
        .then(data => setPurchase(data))
    },[id])
    
    const [purchaseDetails, setPurchaseDetails] = useState({})
    
    const handleOnBlur = e => {
        const field = e.target.name
        const value = e.target.value
        const  details = {...purchaseDetails}
        details[field] = value
        setPurchaseDetails(details)
    }

        const handleSubmit = e => {
        e.preventDefault()
        const initialDetails = {
            name : user.displayName,
            email : user.email,       
            bikeName : name,
            price : price,
            image : image,
            phone : purchaseDetails.phone,
            address : purchaseDetails.address
        }
        fetch('http://localhost:5000/orderItems',{
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(initialDetails)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                alert('purchase successfully')
            }
        })
        // console.log(initialDetails);
    }
    return (
        <div className='py-5' style={{}}>
            <Container>
                <Row>
                    <Col sm={12} md ={5} >
                    <Card style={{ width: '100%', background : '#116466',color : 'white',border :'none' }}>
                        <Card.Img style={{height : '400px'}} variant="top" src={image} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                            {details}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            $ {price}
                        </Card.Footer>
                    </Card>
                    </Col>
                    <Col sm={12} md ={7}  >
                        <div className="heading">
                            <h3>Want to Purchase this one <span className='text-warning'>{name}</span> </h3>
                            <h1>Purchase Now Form</h1>
                        </div>
                        <form onSubmit={handleSubmit}>
                        <input className= 'py-1 mb-3 w-75' type="text" name="name" placeholder='Your Name' id="" value={user.displayName} />
                        <br />
                        <input  className= 'py-1 mb-3 w-75' type="email" name="email" id="" placeholder='Your Email'
                        value={user.email} />
                        <br />
                        <input required onBlur={handleOnBlur}  className= 'py-1 mb-3 w-75' type="number" name="phone" id="" placeholder='Your Phone Number' />
                        <br />
                        <input required onBlur={handleOnBlur}  className= 'py-1 mb-3 w-75' type="text" name="address" id="" placeholder='Your Address' />
                        <br />
                        <input  className='btn btn-warning mb-3 ' type="submit" value="Purchase Now" />
                        <br />
                        <img style={{width : '300px'}} src={purchaseImage} alt="" srcset="" />
                        </form>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Purchase;