import React, { useContext } from 'react'
import { AuthContext } from '../../../auth/context/authContext'
import useLogout from '../../../auth/hooks/useLogout';
import { SlEarphonesAlt } from "react-icons/sl";
import { GoBell } from "react-icons/go";
import { FiLogOut } from "react-icons/fi";
// import { CgProfile } from "react-icons/cg";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const ApplicationHeader = () => {
    const {user} = useContext(AuthContext)
    const {logoutUser} = useLogout()
return (
<section>
    <nav className=' w-full px-6 py-4 flex justify-between items-center fixed top-0 bg-white' >
        
        <div className='flex items-center gap-2'>
            <h1><RiAccountPinCircleFill className='text-4xl text-darkGreen'/></h1>
            <h3 className='text-2xl'>Hi, <span>{user?.firstname}</span></h3>
        </div>

        <div className='flex items-center gap-5 text-darkGreen text-2xl cursor-pointer'>
            {/* <h2> Welcome {user.firstname} </h2> */}
            <SlEarphonesAlt/>
            <Link to="/transaction/details"><GoBell /></Link>
            <h1 onClick={logoutUser}> <FiLogOut/></h1>
        </div>
        
    </nav>
</section>
)
}

export default ApplicationHeader
