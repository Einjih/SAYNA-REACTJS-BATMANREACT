import { createContext,useContext, useEffect, useState } from "react";
import { auth } from '../config-firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";


const UserContext = createContext();

export const AuthContextProvider = ({children})=>{

    const [user, setUser] = useState({});

//Creer un user
const createUser = (email,password)=> {
    return createUserWithEmailAndPassword(auth,email,password);
}


//pour avoir le currentUser
useEffect(()=>{
    onAuthStateChanged(auth, ()=>{

    })
},[])

    return <UserContext.Provider value={{createUser}}>
        {children}
    </UserContext.Provider>
}

export const UserAuth=() =>{

    return useContext(UserContext);
}