import { createSlice } from '@reduxjs/toolkit'

export const powSlice = createSlice({
  name: 'num',
  initialState: {
    v: 1
  },

reducers:{
    pow: state => {
        state.v *= 5
    },

    incrementByAmount: (state, action) => {
        state.v += action.payload
      }

}

})


export const { pow, incrementByAmount } = powSlice.actions

export default powSlice.reducer