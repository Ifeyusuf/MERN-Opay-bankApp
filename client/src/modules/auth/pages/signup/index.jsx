
import React, { useReducer } from 'react';
import useSignupUser from '../../hooks/useSignupUser';
import { useNavigate } from 'react-router-dom';
import { reducer } from '../../utils';

const initialState = {
firstname: "",
middlename: "",
surname: "",
password: "",
tel: "",
email: "",
address: ""
}

const Signup = () => {
    const [state, dispatch] = useReducer(reducer, initialState );
    const {signupResponse, signupUser} = useSignupUser();
    const navigate = useNavigate();

    const handlerSubmit = async (e) => {
        e.preventDefault();
        const res = await  signupUser(state)
        console.log(res, "confirm");
        if (res.status === 201) {
            navigate("/dashboard")
        }
    };

return (
<section className='max-w-lg mx-auto py-10'>
    <form onSubmit={handlerSubmit}>
        
        <div className='my-7 max-w-sm mx-auto '>
        <input type="text" className=' border border-1 px-2 py-1  w-full' name='firstname' placeholder='First Name' onChange={ (e)=> dispatch( {type: "FIRSTNAME", payload: e.target.value} ) } />
        </div>
        
        <div className='my-7 max-w-sm mx-auto '>
        <input type="text" className=' border border-1 px-2 py-1  w-full' name='middlename' placeholder='Middle Name' onChange={ (e)=> dispatch( {type: "MIDDLENAME", payload: e.target.value} ) } />
        </div>
        
        <div className='my-7 max-w-sm mx-auto '>
        <input type="text" className=' border border-1 px-2 py-1  w-full' name='surname' placeholder='SurName' onChange={ (e)=> dispatch( {type: "SURNAME", payload: e.target.value} ) } />
        </div>
        
        <div className='my-7 max-w-sm mx-auto '>
        <input type="email" className=' border border-1 px-2 py-1  w-full' name='email' placeholder='email' onChange={ (e)=> dispatch( {type: "EMAIL", payload: e.target.value} ) } />
        </div>
        
        <div className='my-7 max-w-sm mx-auto '>
        <input type="password" className=' border border-1 px-2 py-1  w-full' name='password' placeholder='Password' onChange={ (e)=> dispatch( {type: "PASSWORD", payload: e.target.value} ) } />
        </div>
        
        <div className='my-7 max-w-sm mx-auto '>
        <input type="text" className=' border border-1 px-2 py-1  w-full' name='address' placeholder='Address' onChange={ (e)=> dispatch( {type: "ADDRESS", payload: e.target.value} ) } />
        </div>
        
        <div className='my-7 max-w-sm mx-auto '>
        <input type="number" className=' border border-1 px-2 py-1  w-full [appearance:textfield] [&::-webkit-inner-spin-button]:appearance: none '  name='tel' placeholder='Phone Number' onChange={ (e)=> dispatch( {type: "TEL", payload: e.target.value} ) } />
        </div>

        <div className="mx-auto text-center pointer">
            <input type="submit" value="Signup" className=' border border-1 border-yellow-300 rounded rounded-7px py-1 px-3 text-lg text-white bg-yellow-300  ' />
        </div>
    </form>
</section>
)
}

export default Signup
