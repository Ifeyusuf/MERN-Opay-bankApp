import React from 'react'

export const ToBank = ({icon, text}) => {
return (
<div className="flex flex-col items-center py-2 cursor-pointer">
    <span className='py-3 px-3 bg-green-100 rounded-xl'>{icon}</span>
    <p className='pt-2 text-lg'>{text}</p>
</div>
)
}

export const ToBankCircle = ({icon, text}) => {
    return (
    <div className="flex flex-col items-center py-2 cursor-pointer">
        <span className='p-2 sm:py-4 sm:px-4 bg-green-100 rounded-full'>{icon}</span>
        <p className='pt-2 sm:text-lg'>{text}</p>
    </div>
    )
    }

export const ToBankReferral = ({icon, title, text}) => {
    return (
    <div className="flex gap-5 items-center  py-2 cursor-pointer">
        <span className='py-4 px-4 bg-green-100 rounded-full flex items-center'>{icon}</span>
        <div>
            <h2 className=' sm:text-xl font-bold'>{title}</h2>
            <p className=' text-sm sm:text-lg'>{text}</p>
        </div>
    </div>
    )
    }

export const ToFooter = ({icon, text}) => {
    return (
    <div className="flex flex-col items-center py-2 cursor-pointer">
        <span className='py-2 px-2 text-darkGreen text-2xl hover:rounded-full hover:bg-darkGreen hover:text-white'>{icon}</span>
        <p>{text}</p>
    </div>
    )
    }

