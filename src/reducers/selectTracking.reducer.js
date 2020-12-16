export const selectTracking = (state, action) => {
  switch (action.type) {
    case "EDIT_VALUE":
      const { name, value } = action;

      return [...state, { name, value }];

    default:
      return state;
  }
};
