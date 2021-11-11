import React, { useState } from 'react';
import { Alert, Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import img1 from '../../../images/pngwing.com.png'
import './AddBikes.css'
const AddBikes = () => {
    const { register, handleSubmit, reset } = useForm();
    const [addedBike ,setAddedBike] = useState(false)
    //add new bikes data send on server
    const onSubmit = data => {
        fetch('https://shielded-inlet-60219.herokuapp.com/bikes', {
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                setAddedBike(true)
                reset()
            }
        })
    };
    return (
        <div>
            <Container>
                <div className="heading mb-5">
                    <h3>For Happy Ride With New Bike</h3>
                    <h1>Add New Bike</h1>
                </div>
                    <Row>
                        <Col lg='6'>
                                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                                <input required placeholder='Bike Name' {...register("name")} />
                                <textarea required placeholder='Bike Details' {...register("details")} />
                                <input required placeholder='Bike Image' {...register("image")} />
                                <input required placeholder='Bike Price' type="number" {...register("price")} />
                                <input className='btn btn-warning' type="submit" value='Add New Bike' />
                                {
                                    addedBike && <Alert  variant='success'> Sir
                                    You Added Product Successfully . Thank You Sir.
                                </Alert>
                                }
                            </form>
                        </Col>
                        <Col lg='6'>
                            <img src={img1} alt="" className="img-fluid" />
                        </Col>
                    </Row>
            </Container>
        </div>
    );
};

export default AddBikes;