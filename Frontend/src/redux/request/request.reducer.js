import { ADD_VENDOR_FAILURE, ADD_VENDOR_REQUEST, ADD_VENDOR_SUCCESS, REQUEST_SERVICE_FAILURE, REQUEST_SERVICE_REQUEST, REQUEST_SERVICE_SUCCESS } from "./request.actionType"

const initialState={
    message:null,
    error:null,
    loading:false,
    requestService:null,
    requestServiceError:null
}
const requestReducer=(state=initialState,action)=>{
    switch (action.type){
        case ADD_VENDOR_REQUEST:
        case REQUEST_SERVICE_REQUEST:
            return{
                loading:true,
                message:null,
                error:null,
                requestService:null
            }
        case REQUEST_SERVICE_SUCCESS:
            return{
                loading:false,
                message:null,
                error:null,
                requestService:action.payload
            }
        case ADD_VENDOR_FAILURE:
        case ADD_VENDOR_SUCCESS:
            return{
                loading:false,
                message:action.payload,
                error:null
            }
            case REQUEST_SERVICE_FAILURE:
            return{
                loading:false,
                message:null,
                requestServiceError:action.payload,
                requestService:null
            }
        case ADD_VENDOR_FAILURE:
            return{
                loading:false,
                message:null,
                error:action.payload,
                requestService:null
            }
        default:
            return state
    }
}

export default requestReducer;