import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    //taking all useFireabase data on allcontecxt to use in authcontext provider
    const allContext = useFirebase()
    return (
        <AuthContext.Provider value= {allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;