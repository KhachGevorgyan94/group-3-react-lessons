import {combineReducers, createStore} from "redux";
import randomNumbersReducer from "./reducers/random-numbers/random-numbers-reducer";
const rootReducer = combineReducers({
  randomNumbersReducer
})
export const store = createStore(rootReducer)

// userReducer => state = {userList: []}
// productReducer => state = {productsList: []}
//store = {
//          userReducer:{userList: []}
//          productReducer:{productsList: []}
// }