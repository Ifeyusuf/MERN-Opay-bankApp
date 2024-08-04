import {createContext } from "react";
import useGetCurrentUser from "../hooks/useGetCurrent";

export const AuthContext = createContext()

function AuthProvider( {children} ) {
    const {currentUserResponse, user} = useGetCurrentUser()
return (
<AuthContext.Provider value={
    {
        currentUserResponse, user
    }
} >

    {children}
</AuthContext.Provider>
)
}

export default AuthProvider
