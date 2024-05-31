export const LoginSuccess = (value) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: value,
  };
};
export const AuthSuccess = (value) => {
  return {
    type: "AUTH_SUCCESS",
    payload: value,
  };
};
export const LoginFailure = (value) => {
  return {
    type: "LOGIN_FAILURE",
    payload: value,
  };
};
export const AlertSuccess = (value) => {
  return {
    type: "ALERT_SUCCESS",
    payload: value,
  };
};

export const addMovies = (value) => {
    console.log(value);
    return {
      type: "MOVIES",
      payload: value,
    };
  };
  

export const addWishlist = (value) => {
  return {
    type: "ADD_WISHLIST",
    payload: value,
  };
};

export const removeWishList = (value) => {
  return {
    type: "REMOVE_WISHLIST",
    payload: value,
  };
};
