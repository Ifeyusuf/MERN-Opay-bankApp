import {createBrowserRouter} from"react-router-dom";
import Dashboard from "./modules/pages/dashboard";
import LandingPage from "./modules/pages/LandingPage";
import Signup from "./modules/auth/pages/signup";
import Login  from "./modules/auth/pages/login";
import Transfers from "./modules/pages/Transfer";
import ProtectedRoute from "./modules/pages/context/ProtectedRoute";
import MobileApp from "./modules/pages/mobile";
import TransactionHistory from "./modules/pages/transaction/TransactionHistory";
import TransactionDetail from "./modules/pages/transaction/TransactionDetail";



export const router = createBrowserRouter( [

{
path: "/",
element: <Login/>
},

{
    path: "/transaction/history",
    element: <TransactionHistory/>
    },

{
    path: "/transaction/details",
    element: <TransactionDetail/>
    },

{
    path: "/mobileApp",
    element: <MobileApp/>
    },

{
path: "/dashboard",
element: <ProtectedRoute><Dashboard/></ProtectedRoute>
},

{
    path: "/signup-user",
    element: <Signup/>
},

{
    path: "/login",
    element: <Login/>
},

{
    path: "/credit-transfer",
    element: <Transfers/>
}

] )
