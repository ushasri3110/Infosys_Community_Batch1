import axios from "axios"
import { ADD_EVENT_FAILURE, ADD_EVENT_REQUEST, ADD_EVENT_SUCCESS, UPDATE_EVENT_FAILURE, UPDATE_EVENT_REQUEST, UPDATE_EVENT_SUCCESS } from "./event.actionType"

function addEvent(formData){
    return async function(dispatch){
        dispatch({type:ADD_EVENT_REQUEST})
        try{
            const jwtToken=localStorage.getItem("jwt");
            const response=await axios.post("http://localhost:8084/addEvent",formData,{
                headers: {
                    "Authorization": `Bearer ${jwtToken}`,
                    "Content-Type": "application/json"
                  }
            });
            const data=response.data;
            dispatch({ type: ADD_EVENT_SUCCESS, payload: data.message });
        }
        catch(error){
            console.log("Error in adding event",error)
            const errorMessage = error.response?.data?.message ||"Unable to Add"
            dispatch({ type: ADD_EVENT_FAILURE, payload: errorMessage });
        }
    }
}

function updateEvent(eventId, formData) {
    return async function(dispatch) {
      dispatch({ type: UPDATE_EVENT_REQUEST });
  
      try {
        const jwtToken = localStorage.getItem("jwt");
  
        const response = await axios.put(
          `http://localhost:8084/updateEvent/${eventId}`, 
          formData);
  
        const data = response.data;
        dispatch({ type: UPDATE_EVENT_SUCCESS, payload: data.message });
      } catch (error) {
        console.log("Error in updating event", error);
        const errorMessage = error.response?.data?.message || "Unable to Update";
        dispatch({ type: UPDATE_EVENT_FAILURE, payload: errorMessage });
      }
    };
  }

export {addEvent,updateEvent}