import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {
    Switch,
    Link,
    useRouteMatch
  } from "react-router-dom";
import useAuth from '../../../Hooks/useAuth';
import AdminRoute from '../../AdminRoute/AdminRoute';
import PrivateRoute from '../../PrivateRoute/PrivateRoute';
import AddBikes from '../AddBikes/AddBikes';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrder from '../ManageAllOrders/ManageAllOrder';
import ManageAllProducts from '../ManageAllProducts/ManageAllProducts';
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Pay/Pay';
import Review from '../Review/Review';
import './DashBoard.css'

const DashBoard = () => {
    let { path, url } = useRouteMatch();
    const {isAdmin, user,logOut} = useAuth()
    return (
        <div>
            <Container>
                <Row>
                    <Col style={{background : '#d1e8e2'}} lg={3} sm={12}>
                    <div className="heading mt-5">
                        <h1 className='my-2'>DashBoard</h1>
                    </div>
                    <h6 className='mx-3 my-3 fw-bold text-dark border-1'><i  className="fas fa-user-check fs-5 "></i> {user?.displayName}</h6>
                        <ul className='dashboard-navbar'>
                                    <button className="btn btn-warning m-2">
                                    <i className="fas fa-home me-2 fs-4"></i>
                                    <Link to={`/`}>Home</Link>
                                    </button>
                                    <br />
                               {
                                user?.email && !isAdmin && <>
                                    
                                    <button className="btn btn-warning m-2">
                                    <i className="fas fa-briefcase me-2 fs-4"></i>
                                    <Link to={`${url}`}>My Orders</Link>
                                    </button>
                                    <br />
                                    <button className="btn btn-warning m-2">
                                    <i className="fas fa-money-check-alt me-2 fs-4"></i>
                                    <Link to={`${url}/pay`}>Pay</Link>
                                    </button>
                                    <br />
                                    <button className="btn btn-warning m-2">
                                    <i className="fas fa-pen-square me-2 fs-4"></i>
                                    <Link to={`${url}/review`}>Review</Link>
                                    </button>
                                    
                                </>
                            }
                             
                            {
                                isAdmin && <>
                                <button className="btn btn-warning m-2 d-flex align-items-center">
                                <i className="far fa-plus-square me-2 fs-4"></i>
                                    <Link to={`${url}`}>Add A Product</Link>
                                </button>

                                

                                <button className="btn btn-warning m-2 d-flex align-items-center">
                                <i className="fas fa-users-cog me-2 fs-4"></i>
                                    <Link to={`${url}/makeAdmin`}>Make Admin</Link>
                                </button>


                                <button className="btn btn-warning m-2 d-flex align-items-center">
                                <i className="fas fa-cogs me-2 fs-4"></i>
                                    <Link to={`${url}/manageAllOrders`}>Manage All Orders</Link>
                                </button>

                                
                                <button className="btn btn-warning mt-2 ms-2 d-flex align-items-center">
                                <i className="fas fa-diagnoses me-2 fs-4"></i>
                                    <Link to={`${url}/manageAllProducts`}>Manage All Products</Link>
                                </button>
                                </>   
                                                            
                            }
                            <br />
                                    <button style={{fontSize : '20px'}} onClick= {logOut} className="btn btn-warning m-2 fw-bold">
                                    <i class="fas fa-sign-out-alt me-2 fs-4"></i>
                                    Log Out
                                    </button>
                        </ul>  
                        </Col>    
                        <Col className='py-5' lg='9' sm='12'>
                        <Switch> 
                        {/* <Route exact path={path}>
                            <AdminPanel></AdminPanel>
                        </Route> */}
                        {
                            !isAdmin && <>
                            <PrivateRoute exact path={`${path}`}>
                                <MyOrders></MyOrders>
                            </PrivateRoute>

                            <PrivateRoute path={`${path}/pay`}>
                            <Pay></Pay>
                            </PrivateRoute>
                                            
                            <PrivateRoute path={`${path}/review`}>
                                <Review></Review>
                            </PrivateRoute>

                            </>
                        }
                        {
                            isAdmin && <>
                            <AdminRoute exact path={`${path}`}>
                                <AddBikes></AddBikes>
                            </AdminRoute>

                            <AdminRoute path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                            </AdminRoute>

                            <AdminRoute path={`${path}/manageAllOrders`}>
                                <ManageAllOrder></ManageAllOrder>
                            </AdminRoute>

                            <AdminRoute path={`${path}/manageAllProducts`}>
                                <ManageAllProducts></ManageAllProducts>
                            </AdminRoute>                       
                            </>
                        }
                    </Switch>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DashBoard;