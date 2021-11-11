import React from 'react';
import { Card, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Bike.css'
const Bike = ({bike}) => {
    const {image, name, details, price,_id} = bike
    return (
        <Col lg='4' md='6' sm='12'>
            <div className="item">
            <Card style={{ width: '100%',background : '#116466',color : 'white',border :'none'  }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    {details}
                    </Card.Text>
                    <Card.Text>
                    $ {price}
                    </Card.Text>
                    <button className="btn btn-warning "><Link className='text-dark' to={`/purchase/${_id}`}>Purchase</Link></button>
                </Card.Body>
            </Card>
            </div>
        </Col>
    );
};

export default Bike;