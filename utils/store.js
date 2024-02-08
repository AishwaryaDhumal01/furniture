import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { persistStore,persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "@/utils/reducers";

const persistConfig = {
    key: "root",
    storage,
   
  };
  
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  


const createStore = (context) =>{
    let myStore = null;

  myStore = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
  });

  myStore.__persistor = persistStore(myStore);

  return myStore;
}
export const wrapper =createWrapper(createStore,{debug:true})



