import React, { useEffect, useReducer, useState } from 'react';
import { transferReducer } from '../reducer';
import { getCreditTransfer, getUserDetails } from '../../auth/api';


const initialState = {
    accountNum: " ",
    amount: " ",
    pin: " ",
}


function Transfers() {
    const [state, dispatch] = useReducer(transferReducer, initialState);
    const [accountOwner, setAccountOwner] = useState(" ")

    const handlerSubmit = async (e) => {
        e.preventDefault()
        const responses = await getCreditTransfer(state)
        console.log(responses);
    }

    useEffect( ()=>{
        const fetchUsers = async () => {
            if(state.accountNum){
                const users = await getUserDetails({accountNum: state.accountNum})
                // console.log(user);
                setAccountOwner(users?.firstname)
            }
        }
        
        fetchUsers();
    },[state.accountNum] )

return (
<section className='max-w-lg mx-auto py-10'>
    <form onSubmit={handlerSubmit}>

        
    <div className='my-7 max-w-sm mx-auto '>
        <input type="text" className=' border border-1 px-2 py-1  w-full' placeholder='account number'  name="accountNum"   onChange={ (e)=> dispatch( {type: "ACCOUNT_NUMBER", payload: e.target.value} ) } />
        {accountOwner ? <p>{accountOwner}</p>  : null}
    </div>
        
    <div className='my-7 max-w-sm mx-auto '>
        <input type="text" className=' border border-1 px-2 py-1  w-full' placeholder='amount' name='amount' onChange={ (e)=> dispatch( {type: "AMOUNT", payload: e.target.value} ) } />
    </div>

    <div className='my-7 max-w-sm mx-auto '>
        <input type="text" className=' border border-1 px-2 py-1  w-full' placeholder='Enter pin' name='pin' onChange={ (e)=> dispatch( {type: "PIN", payload: e.target.value} ) } />
    </div>

    <div className="mx-auto text-center pointer">
        {/* <input type="submit" value="Send" className=' border border-1 border-yellow-300 rounded rounded-7px py-1 px-3 text-lg text-white bg-yellow-300  ' /> */}
        <button type='submit'>Send</button>
    </div>

    </form>
</section>
)
}

export default Transfers
