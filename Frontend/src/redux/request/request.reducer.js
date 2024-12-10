import { 
    ADD_VENDOR_FAILURE, 
    ADD_VENDOR_REQUEST, 
    ADD_VENDOR_SUCCESS, 
    REQUEST_SERVICE_FAILURE, 
    REQUEST_SERVICE_REQUEST, 
    REQUEST_SERVICE_SUCCESS 
} from "./request.actionType";

const initialState = {
    message: null,
    error: null,
    loading: false,
    requestService: null,
    requestServiceError: null
};

const requestReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_VENDOR_REQUEST:
        case REQUEST_SERVICE_REQUEST:
            return {
                ...state,
                loading: true,
                message: null,
                error: null,
                requestService: null,
                requestServiceError: null
            };

        case REQUEST_SERVICE_SUCCESS:
            console.log("requestService ")
            return {
                ...state,
                loading: false,
                requestService: action.payload,
                requestServiceError: null
            };

        case ADD_VENDOR_SUCCESS:
            return {
                ...state,
                loading: false,
                message: action.payload, 
                error: null
            };

        case REQUEST_SERVICE_FAILURE:
            return {
                ...state,
                loading: false,
                requestServiceError: action.payload, 
                requestService: null
            };

        case ADD_VENDOR_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                message: null
            };

        default:
            return state;
    }
};

export default requestReducer;
