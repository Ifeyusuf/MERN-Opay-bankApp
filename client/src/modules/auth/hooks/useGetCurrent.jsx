import React, { useEffect, useMemo, useState } from 'react'
import { getCurrentUser } from '../api'

function useGetCurrentUser() {
    const [currentUserResponse, setCurrentUserResponse] = useState({});
    const abortcontroller = new AbortController();



useEffect( ()=> {
    
    const fetchCurrentUser = async () => {
        const resp = await getCurrentUser();
        setCurrentUserResponse(resp);
    }

    fetchCurrentUser(); 
    return () => {
        abortcontroller.abort();
    }
}, [] );

const user = useMemo( () => currentUserResponse, [currentUserResponse] );
return {currentUserResponse, user}

}

export default useGetCurrentUser
