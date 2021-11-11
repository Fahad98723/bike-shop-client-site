import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const ManageAllProducts = () => {
    const [bikes, setBikes] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/bikes')
        .then(res => res.json())
        .then(data => setBikes(data))
    },[])
    const handleDelete = id => {
        fetch(`http://localhost:5000/bikes/${id}`, {
            method : "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount) {
                alert("deleted successfully")
                const remaining = bikes.filter(bike => bike._id !== id)
                setBikes(remaining)
            }
        })
    }
    return (
        <div>
            <div className="heading mb-5">
                    <h3>Remove Those Bike Which Are Out Of Stock</h3>
                    <h1>Bikes Managing</h1>
                </div>
                <Row className ='gy-5'>
                        {
                        bikes.map(bike => <Col lg='4' md='6' sm='12'>
                        <div>
                        <Card style={{ width: '100%',background : '#116466',color : 'white',border :'none'  }}>
                            <Card.Img style={{height : '250px'}} variant="top" src={bike.image} />
                            <Card.Body>
                                <Card.Title>{bike.name}</Card.Title>
                                <Card.Text>
                                {bike.details.slice(0,100)}
                                </Card.Text>
                                <Card.Text>
                                $ {bike.price}
                                </Card.Text>
                                {/* <button className="btn btn-danger "><Link className='text-white' to={`/purchase/${_id}`}>Purchase</Link></button> */}
                                <button onClick= {() => handleDelete(bike._id)} className="btn btn-danger">Delete</button>
                            </Card.Body>
                        </Card>
                        </div>
                    </Col>)
                        }
                </Row>
        </div>
    );
};

export default ManageAllProducts;