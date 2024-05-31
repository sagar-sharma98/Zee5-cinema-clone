import Login from "../../Pages/Login";

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      console.log(state);
      return { ...state, login: action.payload };
    case "LOGIN_FAILURE":
      return { ...state, login: action.payload };
    case "AUTH_SUCCESS":
      return { ...state, auth: action.payload };
    case "ALERT_SUCCESS":
      return { ...state, alert: action.payload };
    case "ADD_WISHLIST":
      const item = state.movies.find((movie) => movie._id === action.payload);
      const findItem = state.wishList.find(
        (movie) => movie._id === action.payload
      );
      console.log(item);

      if (!findItem)
        return {
          ...state,
          wishList: [...state.wishList, item],
        };
      return state;
    case "REMOVE_WISHLIST":
      const items = state.wishList.filter(
        (movie) => movie._id !== action.payload
      );
      return {
        ...state,
        wishList: [...items],
      };

    case "MOVIES":
      return {
        ...state,
        movies: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
