import React from 'react';
import MobileLayout from './MobileLayout';
import MobileBalance from '../components/MobileBalance';
import { RiAccountPinBoxFill, RiBankFill } from "react-icons/ri";
import { GiPayMoney } from "react-icons/gi";
import { ToBank, ToBankCircle, ToBankReferral } from '../components/ToBank';
import { GiNetworkBars } from "react-icons/gi";
import { TbMobiledata } from "react-icons/tb";
import { BiFootball } from "react-icons/bi";
import { BsCollectionPlay } from "react-icons/bs";
import { SiWeasyl } from "react-icons/si";
import { TbCurrencyNaira } from "react-icons/tb";
import { FaHandHoldingHeart } from "react-icons/fa";
import { CgMoreVerticalO } from "react-icons/cg";
import { AiFillAccountBook } from 'react-icons/ai';
import { GrAnnounce } from "react-icons/gr";
import { Link } from 'react-router-dom';

const MobileApp = () => {
return (
<MobileLayout>

    <main className='px-6'>
        <section>

            <article className='grid grid-cols-1 sm:grid-cols-2 sm:gap-6 py-6'>
                <div>
                    <MobileBalance/>

                    <div className="flex justify-around bg-white rounded-2xl px-4 py-2 my-6">
                        
                        <ToBank icon={<RiAccountPinBoxFill className=' text-darkGreen text-2xl'/>} text=" To Opay"/>

                        <Link to="/credit-transfer"><ToBank icon={<RiBankFill className=' text-darkGreen text-2xl'/>} text=" To Bank"/></Link>

                        <ToBank icon={< GiPayMoney className=' text-darkGreen text-2xl'/>} text=" Withdraw"/>

                    </div>
                </div>

                <section>
                    <div className='grid grid-cols-4 justify-around bg-white rounded-2xl px-4 pb-2 pt-4'>

                        <div className="relative">
                            <ToBankCircle icon={< GiNetworkBars className=' text-darkGreen text-2xl'/>} text=" Airtime"/>
                            <span className=' bg-red-500 sm:w-20 absolute top-0 right-0 text-center rounded rounded-r-full rounded-tl-full text-white text-sm sm:py-[py5px] px-1 "'><small>Up to 6%</small></span>
                        </div>

                        <div className="relative px-6">
                            <ToBankCircle icon={< TbMobiledata  className=' text-darkGreen text-2xl'/>} text=" Data"/>
                            <span className=' bg-red-500 sm:w-20 absolute top-0 right-0 text-center rounded rounded-r-full rounded-tl-full text-white text-sm sm:py-[py5px] px-1 "'><small>Up to 6%</small></span>
                        </div>

                        <div className="">
                            <ToBankCircle icon={<BiFootball className=' text-darkGreen text-2xl'/>} text=" Betting"/>
                        </div>

                        <div className="">
                            <ToBankCircle icon={<BsCollectionPlay className=' text-darkGreen text-2xl'/>} text=" TV"/>
                        </div>

                        <div className="">
                            <ToBankCircle icon={<SiWeasyl className=' text-darkGreen text-2xl'/>} text=" OWealth"/>
                        </div>

                        <div className="">
                            <ToBankCircle icon={<TbCurrencyNaira className=' text-darkGreen text-2xl'/>} text=" Loan"/>
                        </div>

                        <div className="">
                            <ToBankCircle icon={<FaHandHoldingHeart className=' text-darkGreen text-2xl'/>} text=" Play4aChild"/>
                        </div>

                        <div className="">
                            <ToBankCircle icon={<CgMoreVerticalO className=' text-darkGreen text-2xl'/>} text=" More"/>
                        </div>

                    </div>

                    <div className='bg-white rounded-2xl px-4 pb-2 pt-4 mt-6'>
                        <ToBankReferral icon={< GrAnnounce  className=' text-darkGreen text-2xl'/>} title="Cash up for grabs!" text="Invite friends and earn up to #4,200 Cash"/>
                    </div>
                    
                </section>

            </article>


        </section>
    </main>
    
</MobileLayout>
)
}

export default MobileApp
