import {actions} from "./actions";

const initialState = {
  createdNumber: ''
}
/**
 * action
 * {type, payload}
 * type  = da ayn gorcoxutyan anunn e vori mijocov petq e katarvi arjeqi veragrum
 * **/
export default function randomNumbersReducer(state = initialState, action) {
  switch (action.type) {
    case actions.CREATE_RANDOM_NUMBER: {
      state.createdNumber = action.payload
      return {...state}
    }
    default: {
      return state
    }
  }

}