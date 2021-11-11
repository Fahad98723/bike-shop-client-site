import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';


const Review = () => {
    const [review, setReview] = useState({})
    const {user} = useAuth()
    const handleOnBlur = e => {
        const field = e.target.name
        const value = e.target.value

        const reviewDetails = {...review}
        reviewDetails[field] = value
        setReview(reviewDetails)
    }
    const formHandle = e => {
        e.preventDefault()
        const data = {
            name : user?.displayName,
            profession : review.profession,
            rating : review.rating,
            message : review.message
        }
        fetch('http://localhost:5000/review', {
            method : "POST",
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(data)
        })    
    }
    return (
        <div>
            <Container>
            <form onSubmit= {formHandle}>
                <input className= 'py-1 mb-3 w-50' type="text" name="name" id="" placeholder='Your Name' value={user?.displayName}/>
                <br />
                <input onBlur={handleOnBlur} className= 'py-1 mb-3 w-50' type="text" name="profession" id="" placeholder='Your Profession' />
                <br />
                <input min='0' max='5' onBlur={handleOnBlur} type='number' className= 'py-1 mb-3 w-50' name="rating" step="0.5" id="" placeholder='Rate Number' />
                <br />
                <textarea rows='7' onBlur={handleOnBlur} className= 'py-1 mb-3 w-50' name="message" id="" placeholder='Your Message' />
                <br />               
                <input className='btn btn-warning mb-3' type="submit" value="Send" />
                <br />
            </form>
            </Container>
        </div>
    );
};

export default Review;