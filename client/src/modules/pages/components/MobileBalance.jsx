import React, { useContext, useState } from 'react';
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { BiHide } from "react-icons/bi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { MdOutlineNavigateNext } from "react-icons/md";
import { AuthContext } from '../../auth/context/authContext';
import { Link } from 'react-router-dom';

const MobileBalance = () => {
    const [show, setShow] = useState(false)
    const { user } = useContext(AuthContext);

return (
    <article className='flex flex-col bg-darkGreen rounded-2xl px-4 py-2 '>
        <div className="flex justify-between w-full pt-2">
            
        <div className='flex items-center  gap-1 sm:gap-3 text-white text-lg'> 
            <label className=' sm:text-2xl' ><IoShieldCheckmarkSharp/></label> <span className='text-sm'>Availabe Balance</span> <p className=' text-xl cursor-pointer sm:text-2xl' onClick={()=> setShow(!show)}> {show ? <MdOutlineRemoveRedEye className='mt-1'/> : <BiHide className='mt-1'/>} </p> 
        </div>

        <div className='flex items-center gap-1 sm:gap-3 text-white text-lg' >
            <Link to="/transaction/history"><p className='text-sm'>Transaction History </p></Link>
            <p><MdOutlineNavigateNext className='inline-flex'/></p>
        </div>

        </div>

        <div className="flex justify-between py-5">

            <p className='text-white text-2xl'> { show ? ` #${user?.accountBalance}` : "****"} </p>

            <button className='flex gap-1  bg-white rounded-full text-darkGreen py-2 px-3  font-bold'><span>+</span> Add Money</button>
        </div>
        
    </article>
)
}

export default MobileBalance
