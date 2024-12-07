import { applyMiddleware, combineReducers, legacy_createStore } from "redux";

import {thunk} from "redux-thunk";
import authReducer from "./authentication/auth.reducer";
import complaintReducer from "./complaint/complaint.reducer";
import requestReducer from "./request/request.reducer";

const rootReducer=combineReducers({
    auth:authReducer,
    complaint:complaintReducer,
    request:requestReducer
})
export const store=legacy_createStore(rootReducer,applyMiddleware(thunk));