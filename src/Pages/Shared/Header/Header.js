import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Header.css'
const Header = () => {
    const{user,logOut} = useAuth()
    return (
        <Navbar collapseOnSelect expand="lg" sticky= 'top' className='py-2 navigation'>
        <Container>
        <Navbar.Brand className='logo text-warning' as={Link} to="/home">Triangle Bike</Navbar.Brand>
        <Navbar.Toggle />
             <Navbar.Collapse className="justify-content-end menu">
                 <Nav.Link as={Link} to="/home">Home</Nav.Link>
                 <Nav.Link as={Link} to="/allBikes">Explore</Nav.Link>
                
                {
                    user?.email && <>
                    <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                    </>
                }
            <Navbar.Text>
                {user?.email || user?.displayName ? <h6 className='mx-3 my-3 fw-bold text-primary'><i  className="fas fa-user-check fs-5 "></i> {user?.displayName}</h6> : ''}
             </Navbar.Text>
            {
                user?.email || user?.displayName ? 
                <button onClick={logOut} className="btn btn-warning fw-bolder">Logout</button> 
                :
                <button onClick={'loginHandle'} className="btn btn-warning fw-bolder "><Link className='text-dark' to='/login'>Login</Link></button>
            }
                         
             </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;