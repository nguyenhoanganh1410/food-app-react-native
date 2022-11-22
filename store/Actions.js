//actions

export const SET_CART = "set_Cart";

export const SetCart = (payload) => {
  return {
    type: SET_CART,
    payload,
  };
};
