export const selectReducer = (state, action) => {
  switch (action.type) {
    case "SELECT_VALUE":
      // return { ...state, [action.name]: action.value };
      return action.state;
    case "EDIT_VALUE":
      return { ...state, [action.name]: action.value };

    default:
      return state;
  }
};
