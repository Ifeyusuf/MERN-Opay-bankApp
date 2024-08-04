import React from 'react';
import { ToFooter } from '../ToBank';
import { FaRegCircle } from "react-icons/fa";
import { GiPayMoney } from "react-icons/gi";
import { FaChartLine } from "react-icons/fa6";
import { IoCardOutline } from "react-icons/io5";
// import { CiCircleMinus } from "react-icons/ci";
import { IoMdRemoveCircleOutline } from "react-icons/io";

const ApplicationFooter = () => {
return (
<section className=' w-full bg-white fixed bottom-0'>
    <footer className='bg-white px-6 py-2'>

        <article className='flex items-center justify-between'>
            <ToFooter icon={<FaRegCircle/>} text="Home"/>
            <ToFooter icon={< GiPayMoney/>} text="Rewards"/>
            <ToFooter icon={< FaChartLine/>} text="Finance"/>
            <ToFooter icon={<  IoCardOutline/>} text="Cards"/>
            <ToFooter icon={<  IoMdRemoveCircleOutline className="text-2xl" />} text="Me"/>
        </article>
        
    </footer>
</section>
)
}

export default ApplicationFooter
