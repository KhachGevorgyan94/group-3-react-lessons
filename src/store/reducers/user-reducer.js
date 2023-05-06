const initialState = {
  userList: [],
  userName:'',
  editableUser:''
}
/**
 * action
 * {type, payload}
 * type  = da ayn gorcoxutyan anunn e vori mijocov petq e katarvi arjeqi veragrum
 * **/
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    // case 'ADD_USER': {
    //   state.userList = [...state.userList, action.payload]
    //   return {...state}
    // }
    case 'ADD_USER': {
      state.userList = action.payload
      return {...state}
    }
    case 'ADD_USER_NAME':{
      state.userName = action.payload
      return {...state}
    }
    case 'EDIT_USER':{
      state.editableUser = action.payload
      return {...state}
    }

    default: {
      return state
    }
  }

}