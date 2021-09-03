const getProducts = () => {
    return (dispatch: any) => {
      fetch("https://fakestoreapi.com/products?limit=$20")
        .then((res) => res.json())
        .then((data) => {
          dispatch({
            type: "GET_PRODUCTS",
            payload: data,
          });
        });
    };
  };
  
  const addToCart = (product: any) => {
    return {
      type: "ADD_TO_CART",
      payload: product,
    };
  };
  
  const deleteCartItem = (id: any) => {
    return {
      type: "REMOVE_FROM_CART",
      payload: id,
    };
  };
  
  export { getProducts, addToCart, deleteCartItem };