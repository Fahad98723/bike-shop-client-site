import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email , setEmail] = useState('')
    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleMakeAdmin = () => {
        const user = {email}
        fetch('http://localhost:5000/users/admin', {
            method : 'PUT',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(user)
        })
    }
    return (
        <div>
            <input onBlur={handleOnBlur} type="email"/>
            <button onClick= {handleMakeAdmin} className='btn btn-warning'>Make Admin</button>
        </div>
    );
};

export default MakeAdmin;