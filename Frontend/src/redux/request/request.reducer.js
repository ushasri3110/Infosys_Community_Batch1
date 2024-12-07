import { ADD_VENDOR_FAILURE, ADD_VENDOR_REQUEST, ADD_VENDOR_SUCCESS } from "./request.actionType"

const initialState={
    message:null,
    error:null,
    loading:false
}

const requestReducer=(state=initialState,action)=>{
    switch (action.type){
        case ADD_VENDOR_REQUEST:
            return{
                loading:true,
                message:null,
                error:null
            }
        case ADD_VENDOR_SUCCESS:
            return{
                loading:false,
                message:action.payload,
                error:null
            }
        case ADD_VENDOR_FAILURE:
            return{
                loading:false,
                message:null,
                error:action.payload
            }
        default:
            return state
    }
}

export default requestReducer;