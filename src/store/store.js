import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice';
import powReduce from '../features/pow/powSlice';
export default configureStore({
  reducer: {counter: counterReducer,
            pow: powReduce,
           },
 // devTools: true
 
})