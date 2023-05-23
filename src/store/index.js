import {combineReducers, createStore} from "redux";
import userReducer from "./reducers/user-reducer";
import productReducer from "./reducers/product-reducer";
import {configureStore} from '@reduxjs/toolkit'
import userSlice from "./slices/user-slice";
import thunk from 'redux-thunk'
// const rootReducer = combineReducers({
//   productReducer, //productReducer = productReducer
//   userReducer
// })
// redux
// export const store = createStore(rootReducer)

// redux toolkit
export const store = configureStore({
  reducer: {
    userSlice
  },
  //  middleware  - thunk naxatesvac e
  //  mer baci apineri het katarvox  proces@ verahskelu  hamar
  //  bolor iravicahknern pending, rejected, fulfilled
  //  voronq karox eqn kazmakerpel extraReduserneri mijavayrum grelov hamapatasxa funkcianer@
  middleware: [thunk]
})

// userReducer => state = {userList: []}
// productReducer => state = {productsList: []}
//store = {
//          userReducer:{userList: []}
//          productReducer:{productsList: []}
// }