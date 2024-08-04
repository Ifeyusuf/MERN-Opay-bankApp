import React, { useContext, createContext } from 'react'
import { AuthContext } from '../../auth/context/authContext';
import { useNavigate } from 'react-router-dom';

export const ProtectedSecurity = createContext();

const ProtectedRoute = ({children}) => {
    const {user} = useContext(AuthContext)
    const Navigate = useNavigate()

    if(!user){
        Navigate("/")
    } else{
        console.log("user successfully login");
    }

return (
<ProtectedSecurity.Provider value={{}}>
    {children}
</ProtectedSecurity.Provider>
)
}

export default ProtectedRoute
