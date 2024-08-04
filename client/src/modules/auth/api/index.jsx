
const BASE_URL = "http://localhost:8080";
import axios from "axios";

export const signupusers = async (payload) => {

    const response = await axios.post( ` ${BASE_URL}/api/v1/signup-user `, payload, {
        withCredentials: true
    } );
    return response
};


export const loginUser = async (payload) => {
    try {
        const response = await axios.post( ` ${BASE_URL}/api/v1/login-user `, payload, {
            withCredentials: true
        } );

        return response;

    } catch (error) {
        console.log(error.message);
    }
};


export const getCurrentUser = async () => {
    
    try {
        const resp = await axios.get( ` ${BASE_URL}/api/v1/current-user `, {
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("userToken"))}`
            }
        });
        const result = await resp.data.loggedInUser 
        return result
    } catch (error) {
        console.log("cant load");
    }

};


export const getUserDetails = async (payload) => {

    try {
        const resp = await axios.post( ` ${BASE_URL}/api/v1/user-details `, payload, {
            withCredentials: true
        } )

        const result = await resp.data.userDetails
        console.log(result);
        return result
        
    } catch (error) {
        console.log(error.message);
    }
};

export const getCreditTransfer = async (payload) => {

    try {
        const response= await axios.put(` ${BASE_URL}/api/v1/credit-customer `, payload, {
            withCredentials: true,
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("userToken"))}`
                }
        }
    );

        const result = await response.data;
        // console.log(result);
        return result;
        
    } catch (error) {
        console.log(error.message);
    }
};
