import React, { useEffect, useState } from 'react';
import { Alert, Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import purchaseImage from '../../images/purchase.png'
import Header from '../Shared/Header/Header';
const Purchase = () => {
    const [purchase, setPurchase] = useState({})
    const {user} = useAuth()
    const {id}= useParams()
    const {name, image, details, price} = purchase
    const [purchaseConfirm, setPurchaseConfirm] = useState(false)

    //finding purchase item by id 
    useEffect(() => {
        fetch(`https://shielded-inlet-60219.herokuapp.com/bikes/${id}`)
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

    //purchase form data send on server

        const handleSubmit = e => {
        e.preventDefault()
        const initialDetails = {
            name : user.displayName,
            email : user.email,       
            bikeName : name,
            price : price,
            image : image,
            phone : purchaseDetails.phone,
            address : purchaseDetails.address,
            zip : purchaseDetails.zip,
            status : 'Pending'
        }
        fetch('https://shielded-inlet-60219.herokuapp.com/orderItems',{
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(initialDetails)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                setPurchaseConfirm(true)
                e.target.reset()
            }
        })
        // console.log(initialDetails);
    }
    return (
        <>
        <Header></Header>
        <div className='py-5' style={{}}>
            <Container>
                <Row>
                    <Col sm={12} md ={5} >
                    <Card style={{ width: '100%', background : '#116466',color : 'white',border :'none' }}>
                        <Card.Img style={{height : '450px'}} variant="top" src={image} />
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
                        <div className="heading mb-3">
                            <h3>Want to Purchase this one <span className='text-warning fw-bolder fs-2'>{name}</span> </h3>
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
                        <input required onBlur={handleOnBlur}  className= 'py-1 mb-3 w-75' type="text" name="zip" id="" placeholder='Zip' />
                        <br />
                        <input  className='btn btn-warning mb-2 ' type="submit" value="Purchase Now" /> {
                            purchaseConfirm && <Alert  variant='success'>
                            You Successfully Purchase. Now You Can Wait For Approval.
                        </Alert>
                        }
                        <br />
                        <img style={{width : '280px'}} src={purchaseImage} alt="" srcset="" />
                        </form>
                        
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    );
};

export default Purchase;