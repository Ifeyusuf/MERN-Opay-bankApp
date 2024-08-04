import React, { useContext } from 'react';
import TransactionLayout from './TransactionLayout';
import { AuthContext } from '../../auth/context/authContext';

const TransactionHistory = () => {
    const {user} = useContext(AuthContext)

return (
<TransactionLayout>
    <main>
        <article className='max-w-7xl mx-auto mt-20 py-6 px-6 sm:px-0'> 
        {
            user.beneficiary.map( (item, index) => {
                return (
                    <div key={index} className='flex justify-between py-4 capitalize'>
                        <p> Transfer to {item.name}</p>
                        <div>
                            <p>#{item.transferAmount}</p>
                            <span className='text-green-500'>Successful</span>
                        </div>
                    </div>
                )
            })
        }
        </article>
    </main>
</TransactionLayout>
)
}

export default TransactionHistory
