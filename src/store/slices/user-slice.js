import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'


const initialState = {
  userList: []
}

/**
 * createSlice options
 *
 * name,
 * initialState,
 *
 *
 * reducerneri mej argumentum araji parametr@ misht
 * handisanum e stat@
 * ekrord parametr@ handisanum e mer  action@
 * kam ayn datan vor@ meqn  poxancum eqn  dispatchi mijocov
 *
 * **/

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    addUser(state, action) {
      state.userList = [...state.userList, action.payload]
      //    redux tolkiti jamanak stat@ kariq chka amen angam return update anel
      //    ayn miangamic updat e anum hamapatasxan  key@ vor@ vercnum eqn stayti mijic
      //    isk maqur reduxi jamanak `
      //    araji hertin default redurn eqn anum state@
      //     ev amen action ashxatecneluc heto noric retrun enq anum popoxvac stayt@
    }
  },
})

export const {addUser} = userSlice.actions

export default userSlice.reducer

