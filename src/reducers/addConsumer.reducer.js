export const addConsumerReducer = (state, action) => {
  switch (action.type) {
    case "EDIT_VALUE":
      console.log(state);
      console.log(action.name);
      console.log(action.value);
      return { ...state, [action.name]: action.value };

    default:
      return state;
  }
};
