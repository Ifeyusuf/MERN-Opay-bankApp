import React, { useContext, useState } from "react";
import { AuthContext } from "../../../auth/context/authContext";
import { Link } from "react-router-dom";
import { BiHide } from "react-icons/bi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { TbCurrencyNaira } from "react-icons/tb";
import Balance from "../Balance";
import Asterisk from "../Asterisk";

const ApplicationSidebar = () => {
const [show, setShow] = useState(false);
const { user } = useContext(AuthContext);

return (
<section>
    <article className="w-60 h-52 bg-green-500 rounded-lg flex items-center">
    <div className=" mx-auto text-white  ">
        <div className="h-30 w-52 bg-slate-600">
        <div>
            <h2 className="flex items-center">
            
            Account Bal:
            <TbCurrencyNaira className="mt-1  text-2xl" />
            {show ? user?.accountBalance : <Asterisk/> }
            </h2>
        </div>

        <button
            onClick={() => setShow(!show)}
            className="flex items-center py-2"
        >
            {show ? (
            <Balance
                title="Hide Balance"
                iconEye={<BiHide className="inline-flex" />}
            />
            ) : (
            <Balance
                title="Show Balance"
                iconEye={<MdOutlineRemoveRedEye className="inline-flex" />}
            />
            )}
        </button>
        </div>

        <div>
        <Link to={"/credit-transfer"}>Transfer</Link>
        </div>
    </div>
    </article>
</section>
);
};

export default ApplicationSidebar;
