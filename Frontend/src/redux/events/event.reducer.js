import { ADD_EVENT_FAILURE, ADD_EVENT_REQUEST, ADD_EVENT_SUCCESS, UPDATE_EVENT_FAILURE, UPDATE_EVENT_REQUEST, UPDATE_EVENT_SUCCESS } from "./event.actionType"

const initialState={
    loading:false,
    message:null,
    error:null
}
const eventReducer=(state = initialState, action)=>{
    switch(action.type){
        case ADD_EVENT_REQUEST:
        case UPDATE_EVENT_REQUEST:
            return{
                loading:true,
                message:null,
                error:null
            }
            case ADD_EVENT_SUCCESS:
            case UPDATE_EVENT_SUCCESS:
                return{
                    loading:false,
                    message:action.payload,
                    error:null
                }
                case ADD_EVENT_FAILURE:
                case UPDATE_EVENT_FAILURE:
                    return{
                        loading:false,
                        message:null,
                        error:action.payload
                    }
        default:
            return state
    }

}
export default eventReducer