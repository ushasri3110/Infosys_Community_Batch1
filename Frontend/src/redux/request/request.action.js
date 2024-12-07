import axios from "axios";
import { ADD_VENDOR_FAILURE, ADD_VENDOR_REQUEST, ADD_VENDOR_SUCCESS } from "./request.actionType"
function addVendor(vendorData){
    return async function(dispatch){
        dispatch({type:ADD_VENDOR_REQUEST})
        try{
            const jwtToken = localStorage.getItem("jwt");
            const response = await axios.post(`http://localhost:8083/addVendor`, vendorData.data,{
                headers: {
                    "Authorization": `Bearer ${jwtToken}`,
                    "Content-Type": "application/json"
                  }
            });
            const data = response.data;
            dispatch({ type: ADD_VENDOR_SUCCESS, payload: "Added Vendor Successfully" });
        }
        catch(error){
            const errorMessage = error.response?.data?.message || "unable to add vendor";
            dispatch({ type: ADD_VENDOR_FAILURE, payload: errorMessage });
        }
    }
}

export {addVendor}