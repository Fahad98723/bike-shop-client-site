import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,createUserWithEmailAndPassword,signOut ,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitializing from "../firebase/firebase.init";


firebaseInitializing()

const  useFirebase =  () => {
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()
    const [isLoading,setIsLoading] = useState(true)
    const [user,setUser] = useState({})
    const [error, setError] = useState('')
    const [email, setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [name, setName] = useState('')

    //google sign in 
    const googleSignIn = () => {
       return signInWithPopup(auth,googleProvider)        
    }
    //with email and pass sign in
    const loginWithEmailAndPass = (email, password) => {
        return signInWithEmailAndPassword(auth ,email, password)     
    }

    //signup with email and pass
    const signupWithEmailAndPass = (email,password,name, history) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {           
            const newUser = {email, displayName:name}
            setUser(newUser)
            saveUser(email, name, 'POST')
            updateProfile(auth.currentUser, {
                displayName: name,
              })
            setError('')
            history.push('/')
        })
        .catch((error) => {
            setError(error.message)
        });    
    }
    //user data set
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {            
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
        
    },[auth])

    //log out
    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
          }).catch((error) => {
            setError(error.message)
          })
          .finally(() => {
            setIsLoading(false)
          })
    }
    
    const saveUser = (email, name, method) => {
        const user =  {email, name}
        fetch('http://localhost:5000/users', {
            method : method,
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(user)
        })
    }

    return {googleSignIn,user,error, isLoading,signupWithEmailAndPass,loginWithEmailAndPass, setPassword, password, setEmail, email,logOut,setIsLoading,setName, name,setError,setUser,saveUser}
}

export default useFirebase