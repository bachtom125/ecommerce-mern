export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case "PRODUCT_LIST_REQUEST":
      return { loading: true };
    case "PRODUCT_LIST_SUCCESS":
      return { loading: false, products: action.payload };
    case "PRODUCT_LIST_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const cartReducer = (state = { cartItems: [] }, action) => {
  let item = action.payload,
    existItem,
    tempCartItems;
  switch (action.type) {
    case "CART_ADD_ITEM":
      existItem = state.cartItems.find(
        (cartItem) => cartItem.product === item.product
      );

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((cartItem) =>
            cartItem.product === item.product ? item : cartItem
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case "CART_REMOVE_ITEM":
      existItem = state.cartItems.find(
        (cartItem) => cartItem.product === item.product
      );

      if (existItem) {
        tempCartItems = state.cartItems.filter(
          (cartItem) => cartItem.product !== item.product
        );
        return {
          ...state,
          cartItems: tempCartItems,
        };
      } else {
        return {
          ...state,
          cartItems: state.cartItems,
        };
      }

    default:
      return state;
  }
};
