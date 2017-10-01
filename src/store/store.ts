import { applyMiddleware, combineReducers, createStore } from "redux";
import { enableBatching } from "redux-batched-actions";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk"; 
import userReducer from "../reducers/userReducer";

const rootReducer = enableBatching(
    combineReducers({
        user: userReducer,
    }),
);

export default createStore(
    rootReducer,
    undefined,
    composeWithDevTools(applyMiddleware(thunk)),
);
