import React from 'react';

const BalanceHide = ({title, iconEye}) => {
return (
    <article className='flex items-center gap-6'>
        <span>{title} </span>
        <span className='text-2xl'>{iconEye}</span>
    </article>
)
}

export default BalanceHide
