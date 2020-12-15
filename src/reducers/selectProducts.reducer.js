export const selectProducts = (state, action) => {
  switch (action.type) {
    case "SELECT_VALUE":
      const { _id, nameProduct, cost } = action.data;

      return [...state, { _id, nameProduct, cost }];

    default:
      return state;
  }
};
