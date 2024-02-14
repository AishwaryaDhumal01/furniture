
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
  cardCount:0,
  error: null,
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  datas:[],
  reducers: {
    addToCart: (state, action) => {
      state.cards.push(action.payload);
      state.cardCount +=1;
      
    },
    removeToCart:(state,action) =>{
        state.cards = state.cards.filter((card) => card.id !== action.payload);
        state.cardCount -=1;
        if(state.cardCount<0){
          state.cardCount=0;

        }

    },
    removeAll:(state) =>{
      state.cards=[];
      state.cardCount=0;
    },
    increaseQuantity: (state, action) => {
      const card = state.cards.find((c) => c.id === action.payload.id);
      if (card) {
        card.quantity += 1;
        card.price *= 2; // Assuming you want to double the price
        card.total = card.price * card.quantity;
      }
    },
    decreaseQuantity: (state, action) => {
      const card = state.cards.find((c) => c.id === action.payload.id);
      if (card && card.quantity > 1) {
        card.quantity -= 1;
      }
    },
    setQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const card = state.cards.find((card) => card.id === id);
      if (card) {
        card.quantity = parseInt(quantity) < 1 ? 1 : parseInt(quantity);
      } 
  }}
    
});

export const { addToCart,removeToCart,removeAll,increaseQuantity,decreaseQuantity,setQuantity } = cardSlice.actions;

export const selectCards = (state) => state.card.cards;
export const selectCardError = (state) => state.card.error;
export const selectCardCount= (state) => state.card.cardCount;

export default cardSlice.reducer;
