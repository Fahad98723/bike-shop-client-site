import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";
import AdminPanel from '../AdminPanel/AdminPanel';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrder from '../ManageAllOrders/ManageAllOrder';
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Pay/Pay';
import Review from '../Review/Review';
const DashBoard = () => {
    let { path, url } = useRouteMatch();
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={4} sm={12}>
                    <h2>Topics</h2>
                        <ul>
                            <li>
                            <Link to={`${url}`}>Rendering with React</Link>
                            </li>
                            <li>
                            <Link to={`${url}/pay`}>Components</Link>
                            </li>
                            <li>
                            <Link to={`${url}/makeAdmin`}>Make Admin</Link>
                            </li>
                            <li>
                            <Link to={`${url}/manageAllOrders`}>Manage All Orders</Link>
                            </li>
                            <li>
                            <Link to={`${url}/myOrders`}>My Orders</Link>
                            </li>
                            <li>
                            <Link to={`${url}/review`}>Review</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col lg={8} sm={12}>
                    <Switch>
                        <Route exact path={path}>
                            <AdminPanel></AdminPanel>
                        </Route>
                        <Route path={`${path}/pay`}>
                            <Pay></Pay>
                        </Route>
                        <Route path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </Route>
                        <Route path={`${path}/manageAllOrders`}>
                            <ManageAllOrder></ManageAllOrder>
                        </Route>
                        <Route path={`${path}/myOrders`}>
                            <MyOrders></MyOrders>
                        </Route>
                        <Route path={`${path}/review`}>
                            <Review></Review>
                        </Route>
                    </Switch>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DashBoard;