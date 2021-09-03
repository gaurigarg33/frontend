const cartReducer = (state = [], action: any) => {
    switch (action.type) {
      case "ADD_TO_CART":
        return [action.payload, ...state];
      case "REMOVE_FROM_CART":
        console.log(action.payload);
        const newState = state.filter((item: any) => item.id !== action.payload);
        return newState;
      default:
        return state;
    }
  };
  
  export default cartReducer;