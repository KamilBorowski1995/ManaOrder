export const selectTracking = (state, action) => {
  switch (action.type) {
    case "EDIT_VALUE":
      console.log(state);
      return { ...state, [action.name]: action.value };

    default:
      return state;
  }
};
