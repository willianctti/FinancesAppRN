import React, { createContext, useState } from "react";
import firebase from "../services/firebaseConnection";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs} from 'firebase/firestore/lite'
export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [user, setUser] = useState(null)

    //Cadastro
    async function signUp(email, password, nome) {
        await firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(async (value) => { 
                let uid = value.user.uid;
                await firebase.
            console.log("Usuário cadastrado com sucesso:", userCredential.user);
            setUser(userCredential.user);
        })
        
    }
    

    return (
        <AuthContext.Provider value={{signed: !!user, user, }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;