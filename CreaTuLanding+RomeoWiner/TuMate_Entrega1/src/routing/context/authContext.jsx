import { createContext, useContext, useState, useEffect } from "react"
import { auth } from "../../firebase/config";
import { createUserWithEmailAndPassword } from 'firebase/auth'

const authContext = createContext()

export const { Provider } = authContext

export const useAuthContext = () => useContext(authContext)

const AuthProvider = ({children}) =>{
    const [currentUser, setCurrentUser] = useState(true)
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(true)

    const doCreateUserWithEmailAndPassword = async (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const value = {
        currentUser,
        isUserLoggedIn,
        doCreateUserWithEmailAndPassword
    }

    return <Provider value={value}>{children}</Provider>
}

export default AuthProvider