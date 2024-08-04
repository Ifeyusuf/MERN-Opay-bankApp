import React, { useContext } from 'react';
import TransactionLayout from './TransactionLayout';
import { AuthContext } from '../../auth/context/authContext';

const TransactionDetail = () => {
    const {user} = useContext(AuthContext)

return (
<TransactionLayout>
    <main className='bg-darkGrey'>
        <article className='max-w-7xl mx-auto mt-20 py-6 px-6 sm:px-0'> 

        <div className='bg-white max-w-4xl rounded-lg mx-auto px-6 py-4 flex flex-col items-center justify-center'>
            {
                user.beneficiary.map( (item) =>{
                    return(
                        <div>
                            <p>Transfer to <span>{item.firstname}</span></p>
                            <p className='text-2xl my-3'>#{item.transferAmount}</p>
                            <p className='text-green-500'>Successful</p>
                        </div>
                    )
                })
            }
            <div className=' text-sm max-w-sm bg-darkGrey rounded-lg mx-auto px-4 py-2 my-4'>
                <p>The recipient account is expected to be credited within 5 minutes, subject to notification by the bank</p>
            </div>
        </div>
        
        </article>
    </main>
</TransactionLayout>
)
}

export default TransactionDetail
