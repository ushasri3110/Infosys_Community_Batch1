const initialState = {
    jwt: null,
    message: null,
    isLogged: false,
    error: null,
    userDetails:null,
    loading: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_REQUEST":
        case "REGISTER_REQUEST":
        case "REGISTER_ADMIN_REQUEST":
        case "REGISTER_RESIDENT_REQUEST":
        case "GET_USER_DETAILS_REQUEST":
            return { ...state, loading: true, error: null };
        
        case "LOGIN_SUCCESS":
            console.log(`${action.type} ${action.payload}`);
            return { 
                ...state, 
                jwt: action.payload.token, 
                isLogged: true,
                message:action.payload.message,
                loading: false,
                error: null,
            };
        case "REGISTER_SUCCESS":
            console.log(`${action.type} ${action.payload}`);
            return { 
                ...state, 
                jwt: action.payload.token, 
                isLogged: true,
                loading: false,
                error: null,
            };
        case "REGISTER_ADMIN_SUCCESS":
        case "REGISTER_RESIDENT_SUCCESS":
            console.log(`${action.type} ${action.payload}`);
            return { 
                ...state, 
                message: action.payload, 
                isLogged: true,
                loading: false,
                error: null,
            };
        case "GET_USER_DETAILS_SUCCESS":
            console.log(`user:${action.payload.name}`);
            return {
                ...state,
                loading: false,
                userDetails: action.payload,
                error: null,
            };
        case "LOGIN_FAILURE":
        case "REGISTER_FAILURE":
        case "REGISTER_ADMIN_FAILURE":
        case "REGISTER_RESIDENT_FAILURE":
        case "GET_USER_DETAILS_FAILURE":
            console.log(`${action.type} ${action.payload}`);
            return { 
                ...state, 
                loading: false,
                error: action.payload,
                isLogged: false,
            };
        case "LOGOUT":
            return { ...state, isLogged: false };
        default:
            return state;
    }
};

export default authReducer;
