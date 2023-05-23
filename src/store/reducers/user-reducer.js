const initialState = {
  userList: []
}
/**
 * action
 * {type, payload}
 * type  = da ayn gorcoxutyan anunn e vori mijocov petq e katarvi arjeqi veragrum
 * **/
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_USER': {
      state.userList = [...state.userList, action.payload]
      return {...state}
    }
    default: {
      return state
    }
  }

}

export const addUser = (data)=>{

}