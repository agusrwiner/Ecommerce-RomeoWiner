import { createContext, useContext, useState, useEffect } from "react"

const authContext = createContext()

export const { Provider } = authContext

export const useAuthContext = () => useContext(authContext)

const AuthProvider = ({children}) =>{
    const [currentUser, setCurrentUser] = useState(true)
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(true)

    const value = {
        currentUser,
        isUserLoggedIn
    }

    return <Provider value={value}>{children}</Provider>
}

export default AuthProvider