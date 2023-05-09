import {combineReducers, createStore} from "redux";

const rootReducer = combineReducers({})
export const store = createStore(rootReducer)

// userReducer => state = {userList: []}
// productReducer => state = {productsList: []}
//store = {
//          userReducer:{userList: []}
//          productReducer:{productsList: []}
// }