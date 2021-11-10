import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const LogIn = () => {
    const {googleSignIn,error,loginWithEmailAndPass,setError,saveUser} = useAuth()
    const [user, setUser] = useState({})
    const location = useLocation()
    const history = useHistory()
    const uri = location?.state?.from?.pathname;
    console.log(uri);
    const handleOnBlur = e => {
        const field = e.target.name
        const value = e.target.value

        const userDetails = {...user}
        userDetails[field] = value
        setUser(userDetails)
    }
    const email = user?.email
    const password = user?.password
    
    const emailAndPassSignIn = (email,password) => {
        loginWithEmailAndPass(email,password)
        .then(result => {
            setUser(result.user)
            if (uri) {
                history.push(uri)  
            }
            else{
                history.push('/')
            }
        })
        .catch(error => {
            setError(error.message)
        })
    }
    const handleGoogleLogin = () => {
        googleSignIn()
        .then(result => {
            const user = result.user
            saveUser(user.email, user.displayName, "PUT")
            if (uri) {
                history.push(uri)  
            }
            else{
                history.push('/')
            }
        })
        .catch(error => {
            setError(error.message)
        })
    }
    console.log(user);
    const formHandle = e => {
        e.preventDefault()
        emailAndPassSignIn(email,password)
    
    }

    return (
        <div>
            <Container className= 'text-center py-5'>
            <form onSubmit= {formHandle}>
                <input onBlur={handleOnBlur} className= 'py-1 mb-3' type="email" name="email" id="" placeholder='Your Email' />
                <br />
                <input onBlur={handleOnBlur} className= 'py-1 mb-3' type="password" name="password" id="" placeholder='Your Password' />
                <br />
                <input className='btn btn-warning mb-3' type="submit" value="Signin" />
                <br />
            </form>
            <h5 className='text-danger my-1'>{error}</h5>
            <h6 className=' mb-2'>New User ? <Link to='/register'>Create account</Link></h6>
            <i onClick = {handleGoogleLogin} className="fab fa-google fs-4"></i>
            </Container>
        </div>
    );
};

export default LogIn;