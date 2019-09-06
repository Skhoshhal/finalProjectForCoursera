import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Data} from "./reducer";


export const ConfigureStore = () => {
    const store = createStore(combineReducers({
            data: Data,
    }),
    composeWithDevTools(applyMiddleware(thunk)),
);
    return store
};

