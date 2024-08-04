import React, { useContext } from 'react'
import { AuthContext } from '../../auth/context/authContext'
import ApplicationLayout from '../layoutpage'

const Dashboard = () => {

    const {currentUserResponse, user} = useContext(AuthContext)
    console.log(currentUserResponse);
return (
<ApplicationLayout>
    <h1>{user?.firstname}</h1>
    <h2>Welcome</h2>
</ApplicationLayout>
)
}

export default Dashboard
