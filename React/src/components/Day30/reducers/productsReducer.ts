const productsReducer = (state: any = [], action: any) => {
    switch (action.type) {
      case "GET_PRODUCTS":
        return action.payload;
      default:
        return state;
    }
  };
  
  export default productsReducer;