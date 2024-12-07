import { 
    CLOSE_COMPLAINT_FAILURE, 
    CLOSE_COMPLAINT_REQUEST, 
    CLOSE_COMPLAINT_SUCCESS, 
    REGISTER_COMPLAINT_FAILURE, 
    REGISTER_COMPLAINT_REQUEST, 
    REGISTER_COMPLAINT_SUCCESS 
} from "./complaint.actionType";

const initialState = {
    complaintCreatedMessage: null,
    error: null,
    closeMessage: null,
    loading: false,
};

const complaintReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_COMPLAINT_REQUEST:
        case CLOSE_COMPLAINT_REQUEST:
            return {
                ...state,
                loading: true,
                complaintCreatedMessage: null,
                closeMessage: null,
                error: null,
            };
        case REGISTER_COMPLAINT_SUCCESS:
            return {
                ...state,
                loading: false,
                complaintCreatedMessage: "Complaint Registered Successfully",
                error: null,
            };
        case CLOSE_COMPLAINT_SUCCESS:
            return {
                ...state,
                loading: false,
                closeMessage: action.payload.status,
                error: null,
            };
        case REGISTER_COMPLAINT_FAILURE:
        case CLOSE_COMPLAINT_FAILURE:
            return {
                ...state,
                loading: false,
                complaintCreatedMessage: null,
                closeMessage: null,
                error: action.payload.error,
            };
        default:
            return state;
    }
};

export default complaintReducer;
