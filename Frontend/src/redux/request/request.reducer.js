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
    loading: false
};

const requestReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_VENDOR_REQUEST:
        case REQUEST_SERVICE_REQUEST:
            return {
                loading: true,
                message: null,
                error: null
            };

        case REQUEST_SERVICE_SUCCESS:
        case ADD_VENDOR_SUCCESS:
            return {
                loading: false,
                message: action.payload, 
                error: null
            };

        case REQUEST_SERVICE_FAILURE:
        case ADD_VENDOR_FAILURE:
            return {
                loading: false,
                error: action.payload,
                message: null
            };
        default:
            return state;
    }
};

export default requestReducer;
