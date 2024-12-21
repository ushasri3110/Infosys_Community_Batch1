import { toast, Zoom } from "react-toastify";
import { GET_FLATS_FAILURE, GET_FLATS_REQUEST, GET_FLATS_SUCCESS, GET_RESIDENTS_FAILURE, GET_RESIDENTS_REQUEST, GET_RESIDENTS_SUCCESS } from "./flats.actionType";

const initialState = {
    loading: false,
    error: null,
    flats:[],
    residents: []
}
const flatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FLATS_REQUEST:
        case GET_RESIDENTS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case GET_FLATS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                flats: action.payload
            };
        case GET_RESIDENTS_SUCCESS:
            return{
                ...state,
                loading:false,
                error: null,
                residents: action.payload
            }
        case GET_FLATS_FAILURE:
        case GET_RESIDENTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default flatsReducer