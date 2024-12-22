import axios from "axios";
import { ADD_FLATS_FAILURE, ADD_FLATS_REQUEST, ADD_FLATS_SUCCESS, GET_FLATS_FAILURE, GET_FLATS_REQUEST, GET_FLATS_SUCCESS, GET_RESIDENTS_FAILURE, GET_RESIDENTS_REQUEST, GET_RESIDENTS_SUCCESS } from "./flats.actionType";

export function getAllFlats() {
    return async function (dispatch) {
        dispatch({ type: GET_FLATS_REQUEST })
        try {
            const jwtToken = localStorage.getItem("jwt");
            const response = await axios.get(`http://localhost:8082/api/getAllFlats`,
                {
                    headers: {
                        "Authorization": `Bearer ${jwtToken}`,
                        "Content-Type": "application/json"
                    }
                }
            )
            const data = response.data;
            dispatch({ type: GET_FLATS_SUCCESS, payload: data })
        }
        catch (error) {
            dispatch({ type: GET_FLATS_FAILURE, payload: "Failed To Get Flats" })
        }
    }
}

export function getAllResidents() {
    return async function (dispatch) {
        dispatch({ type: GET_RESIDENTS_REQUEST })
        try {
            const jwtToken = localStorage.getItem("jwt");
            const response = await axios.get(`http://localhost:8082/api/residents`,
                {
                    headers: {
                        "Authorization": `Bearer ${jwtToken}`,
                        "Content-Type": "application/json"
                    }
                }
            )
            const data = response.data;
            dispatch({ type: GET_RESIDENTS_SUCCESS, payload: data })
        }
        catch (error) {
            dispatch({ type: GET_RESIDENTS_FAILURE, payload: "Failed To Get Residents" })
        }
    }
}

export function addFlat(flatNo) {
    return async function (dispatch) {
        dispatch({ type: ADD_FLATS_REQUEST });
        try {
            const jwtToken = localStorage.getItem("jwt");
            const response = await axios.post(`http://localhost:8082/api/addFlat`, flatNo,
                {
                    headers: {
                        "Authorization": `Bearer ${jwtToken}`,
                        "Content-Type": "application/json"
                    }
                }
            );
            dispatch({ type: ADD_FLATS_SUCCESS, payload: "Flat Added"});
            dispatch(getAllFlats());
        } catch (error) {
            dispatch({ type: ADD_FLATS_FAILURE, payload: error });
        }
    };
}