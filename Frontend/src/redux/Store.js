import { applyMiddleware, combineReducers, legacy_createStore } from "redux";

import {thunk} from "redux-thunk";
import authReducer from "./authentication/auth.reducer";
import complaintReducer from "./complaint/complaint.reducer";
import requestReducer from "./request/request.reducer";
import eventReducer from "./events/event.reducer";
import noticeReducer from "./notice/notice.reducer";
import postReducer from "./post/post.reducer";

const rootReducer=combineReducers({
    auth:authReducer,
    complaint:complaintReducer,
    request:requestReducer,
    event:eventReducer,
    notice:noticeReducer,
    post:postReducer
})
export const store=legacy_createStore(rootReducer,applyMiddleware(thunk));