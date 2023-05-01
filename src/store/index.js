import {combineReducers, createStore} from "redux";
import userReducer from "./reducers/user-reducer";
import productReducer from "./reducers/product-reducer";
const rootReducer = combineReducers({
  productReducer, //productReducer = productReducer
  userReducer
})
export const store = createStore(rootReducer)

// userReducer => state = {userList: []}
// productReducer => state = {productsList: []}
//store = {
//          userReducer:{userList: []}
//          productReducer:{productsList: []}
// }