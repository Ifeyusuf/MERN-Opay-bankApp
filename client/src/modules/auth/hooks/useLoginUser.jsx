import { useState } from 'react'
import { loginUser } from '../api';

function useLoginUser()  {
    const [loginResponse, setLoginResponse] = useState({});

    const loginHandler = async (payload) => {
        const response = await loginUser(payload)
        // const respData = await response.data
        console.log(response);
        setLoginResponse(response);
    }
    return { loginResponse, loginHandler }
}

export default useLoginUser;
