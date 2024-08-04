import React from 'react'
import { useNavigate } from 'react-router-dom'

function useLogout() {
    const Navigate = useNavigate()

    const logoutUser = () => {
        localStorage.removeItem("userToken") 
            Navigate("/")
    }
    

return {logoutUser}
}

export default useLogout
