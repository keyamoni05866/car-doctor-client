import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext } from 'react';
import app from '../firebase/Firebase.config';

 export const AuthContext =  createContext();
const auth = getAuth(app);
const AuthProviders = ({children}) => {
 const [user, setUser]= useState(null);
 const [loading, setLoading] = useState(true);


 const createUser = (email, password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
 }
const signIn = (email, password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
}
 const logOut = () =>{
    setLoading(true)
    return signOut(auth)
 }
 useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser);
        setLoading(false);
    });
    return () =>{
        return unsubscribe();
    }
 },[])
    const authInfo ={
     user,
     loading,
     createUser,
     signIn,
     logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;