import { SET_CART } from "./Actions";

//innite state
const initState = {
  foodChoise: null,
  cart: [],
};

//depatch
const Reducer = (state, action) => {
  switch (action.type) {
    case SET_CART:
      return {
        ...state,
        cart: action.payload,
      };
  }
};

export { initState };
export default Reducer;
