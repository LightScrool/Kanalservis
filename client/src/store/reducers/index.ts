import {combineReducers} from "redux";
import {itemsReducer} from "./itemsReducer";

const rootReducer = combineReducers({
    items: itemsReducer,
})

export default rootReducer;

export type RootStateType = ReturnType<typeof rootReducer>;
