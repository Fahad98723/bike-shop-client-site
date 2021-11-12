import React, { useState } from 'react';
import { Alert, Col, Row } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import img1 from '../../../images/review.png'

const Review = () => {
    const [review, setReview] = useState({})
    const [reviewDone, setReviewDone] = useState(false)
    const {user} = useAuth()
    const handleOnBlur = e => {
        const field = e.target.name
        const value = e.target.value

        const reviewDetails = {...review}
        reviewDetails[field] = value
        setReview(reviewDetails)
    }
    //review send on the server
    const formHandle = e => {
        e.preventDefault()
        const data = {
            name : user?.displayName,
            profession : review.profession,
            rating : review.rating,
            message : review.message
        }
        fetch('https://shielded-inlet-60219.herokuapp.com/review', {
            method : "POST",
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(data)           
        })   
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                setReviewDone(true)
                e.target.reset()
            }
        }) 
    }
    return (
        <div>
            <Row>
                <Col lg='6' sm = '12'>
                    <img src={img1} alt="" className="img-fluid" />
                </Col>
                <Col lg='6' sm = '12'>
                    <div className="heading">
                        <h3>Write About Our Good And Bad</h3>
                        <h1>Write Your Review</h1>
                    </div>
                <form onSubmit= {formHandle}>
                <input className= 'py-1 mb-3 w-100' type="text" name="name" id="" placeholder='Your Name' value={user?.displayName}/>
                <br />
                <input onBlur={handleOnBlur} className= 'py-1 mb-3 w-100' type="text" name="profession" id="" placeholder='Your Profession' />
                <br />
                <input min='0' max='5' onBlur={handleOnBlur} type='number' className= 'py-1 mb-3 w-100' name="rating" step=".5" id="" placeholder='Rate Number' />
                <br />
                <textarea rows='7' onBlur={handleOnBlur} className= 'py-1 mb-3 w-100' name="message" id="" placeholder='Your Message' />
                <br />               
                <input className='btn btn-warning mb-3' type="submit" value="Send" />
                <br />
                {
                    reviewDone && <Alert  variant='success'>
                        You Successfully Reviewed . Thank You For Your Words.
                    </Alert>
                }
            </form>
                </Col>
            </Row>
        </div>
    );
};

export default Review;