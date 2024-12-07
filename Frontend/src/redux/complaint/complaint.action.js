import axios from "axios";
import { REGISTER_COMPLAINT_FAILURE, REGISTER_COMPLAINT_REQUEST, REGISTER_COMPLAINT_SUCCESS,CLOSE_COMPLAINT_FAILURE,CLOSE_COMPLAINT_REQUEST,CLOSE_COMPLAINT_SUCCESS } from "./complaint.actionType"

function registerComplaint(complaintData){
    return async function(dispatch){
        dispatch({type:REGISTER_COMPLAINT_REQUEST})
        try{
            const jwtToken = localStorage.getItem("jwt");
            const response = await axios.post(`http://localhost:8083/addComplaint`, complaintData.data,{
                headers: {
                    "Authorization": `Bearer ${jwtToken}`,
                    "Content-Type": "application/json"
                  }
            });
            const data = response.data;
            dispatch({ type: REGISTER_COMPLAINT_SUCCESS, payload: data });
        }
        catch(error){
            const errorMessage = error.response?.data?.message || "unable to register complaint";
            dispatch({ type: REGISTER_COMPLAINT_FAILURE, payload: errorMessage });
        }
    }
}
function closeComplaint(complaintId){
    return async function(dispatch){
        dispatch({type:CLOSE_COMPLAINT_REQUEST})
        try{
            const response = await axios.put(`http://localhost:8083/closeComplaint/${complaintId}`);
            const data = response.data;
            dispatch({ type: CLOSE_COMPLAINT_SUCCESS, payload: data });
        }
        catch(error){
            const errorMessage = error.response?.data?.message || "unable to register complaint";
            dispatch({ type: CLOSE_COMPLAINT_FAILURE, payload: errorMessage });
        }
    }

}

export {registerComplaint,closeComplaint};