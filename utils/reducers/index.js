

import { combineReducers } from 'redux';
import dataSlice from './dataSlice'
import cartSlice from './cart.slice';


const rootReducer = combineReducers({
  data: dataSlice,
  card:cartSlice
  
});
export default rootReducer;
