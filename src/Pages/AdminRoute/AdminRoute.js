import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';


const AdminRoute = ({ children, ...rest }) => {
    const {user,isLoading, isAdmin} = useAuth()
     //spinner on data loading and stoping the problem after reloading always went on login 
     if(isLoading){
        return <Spinner className = 'd-block mx-auto' animation="border" variant="danger" />
    }
    return (
        <Route
      {...rest}
      render={({ location }) =>
        user?.email && isAdmin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default AdminRoute;