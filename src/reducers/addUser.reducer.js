export const addUserReducer = (state, action) => {
  switch (action.type) {
    case "EDIT_VALUE":
      return { ...state, [action.name]: action.value };

    default:
      return state;
  }
};
