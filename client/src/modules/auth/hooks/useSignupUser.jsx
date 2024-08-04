import  { useState } from 'react';
import { signupusers } from '../api';

function useSignupUser(){
    const [signupResponse, setSignupResponse] = useState({});

    const signupUser = async (payload) => {
        const response = await signupusers(payload);
        const data = await response.data
        setSignupResponse(data.user)
        localStorage.setItem("user", JSON.stringify(data.user));
        return response
    }
    return {signupResponse, signupUser}

}

export default useSignupUser
