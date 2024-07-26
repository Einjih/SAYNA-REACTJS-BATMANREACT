import { createContext,useContext, useEffect, useState } from "react";
import { auth } from '../config-firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


const UserContext = createContext();

export const AuthContextProvider = ({children})=>{

    const [user, setUser] = useState({});

//Creer un user
const createUser = (email,password)=> {
    return createUserWithEmailAndPassword(auth,email,password);
}


//pour avoir le currentUser
useEffect(()=>{
     onAuthStateChanged(auth, (currentUser)=>{
      setUser(currentUser);
      console.log(currentUser);
    });
    
},[]);


//déconnexion
const logout = () => {
    signOut(auth);
}

//Connexion

const login = (email, password) => {
     return signInWithEmailAndPassword(auth, email, password);
}

//Les vaeurs des fonctions à exporter

    return <UserContext.Provider value={{createUser, user, logout, login}}>
        {children}
    </UserContext.Provider>
}

export const UserAuth=() =>{

    return useContext(UserContext);
}