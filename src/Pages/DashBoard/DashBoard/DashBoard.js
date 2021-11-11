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
import AdminPanel from '../AdminPanel/AdminPanel';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrder from '../ManageAllOrders/ManageAllOrder';
import ManageAllProducts from '../ManageAllProducts/ManageAllProducts';
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Pay/Pay';
import Review from '../Review/Review';
import './DashBoard.css'

const DashBoard = () => {
    let { path, url } = useRouteMatch();
    const {isAdmin, user} = useAuth()
    return (
        <div>
            <Container>
                <Row>
                    <Col style={{background : '#d1e8e2'}} lg={3} sm={12}>
                    <h2 className='mt-2'>DashBoard</h2>
                        <ul className='dashboard-navbar'>
                               {
                                user && !isAdmin && <>
                                    
                                    <button className="btn btn-warning m-2">
                                    <Link to={`${url}`}>My Orders</Link>
                                    </button>
                                    <br />
                                    <button className="btn btn-warning m-2">
                                    <Link to={`${url}/pay`}>Pay</Link>
                                    </button>
                                    <br />
                                    <button className="btn btn-warning m-2">
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
                                <i className="fas fa-diagnoses m-1 fs-4"></i>
                                    <Link to={`${url}/manageAllProducts`}>Manage All Products</Link>
                                </button>
                              
                                </>
                            }
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