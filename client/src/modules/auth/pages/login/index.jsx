import React, {useEffect, useReducer, useState} from 'react';
import useLoginUser from '../../hooks/useLoginUser';
import { loginReducer } from '../../utils';
import { useNavigate } from "react-router-dom"
import OpayLogo from "../../../../assets/Opayl.jpg";
import CBN from "../../../../assets/CBN.jpg";
import { BiHide } from "react-icons/bi";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const initialState = {
    email: "",
    password: "" ,
    loading: false
};


function Login() {
    const [state, dispatch] = useReducer( loginReducer, initialState);
    const { loginResponse, loginHandler } = useLoginUser();
    const navigate = useNavigate();
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [showP, setShowP] = useState(false)

    const loginSubmit = async (e) => {
        e.preventDefault();
        const response = await loginHandler(state);
        console.log(loginResponse);
        if(loginResponse.data.success){
            localStorage.setItem("userToken", JSON.stringify(loginResponse.data.token));
            navigate("/mobileApp")
        } 
        else{
            setErrorEmail(loginResponse?.data.error.email);
            setErrorPassword(loginResponse?.data.error.password);

            setTimeout( ()=>{
                setErrorEmail("")
                setErrorPassword("")
            },3000);

        } 
    };


return (
<section className='max-w-lg mx-auto  max-h-screen '>
    <form onSubmit={loginSubmit} className=' '>

        <img src={OpayLogo} width={200} alt="OPay" className='mx-auto pt-14 pb-6' />

            <p  className='text-center text-red-500 h-5'>{errorEmail}</p>
            <p  className='text-center text-red-500 h-5'>{errorPassword}</p>

        <div className=' max-w-sm mx-auto '>
        <input type="email" className=' border border-1 px-2 py-2  w-full rounded-lg outline-none' name='email' placeholder='email' onChange={ (e)=> dispatch( {type: "EMAIL", payload: e.target.value} ) } /> 
    </div>
        
    <div className='my-7 max-w-sm mx-auto flex items-center gap-2 relative '>
        <input type={ showP ? "text" : "password"} className=' border border-1 px-2 py-2 rounded-lg outline-none  w-full' name='password' placeholder='Password' onChange={ (e)=> dispatch( {type: "PASSWORD", payload: e.target.value} ) } />

        <p className='absolute  flex items-center right-2 cursor-pointer' onClick={ ()=> setShowP(!showP)}> {
            showP ? <MdOutlineRemoveRedEye className='text-2xl text-green-300'/>  : <BiHide className='text-2xl text-green-300'/> 
        } </p>
    </div>

    <div className="max-w-sm mx-auto text-center pointer  ">
        <button className=' w-full border border-1 border-green-300 rounded rounded-7px py-2  text-lg text-white bg-green-500 w-3/4 cursor-pointer '>{state.loading ? "loading..." : "Login"}</button>
    </div>

    <div className="mx-auto flex justify-center items-bottom pt-20 mt-20">
        <img src={CBN} width={280} alt="CBN" />
    </div>

    </form>

</section>
)
}

export default Login
