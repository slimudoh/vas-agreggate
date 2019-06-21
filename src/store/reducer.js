import * as actionType from "../store/action";

const initialState = {
  details: {},
  category: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.addValue:
      // const newValue = [...state.details];
      // newValue.push(action.value);
      // state.details = newValue;
      return {
        details: action.value
      };
    case actionType.categoryValue:
      // const newCategory = [...state.category];
      // newCategory.push(action.value);
      // state.category = newCategory;
      return {
        category: action.value
      };
    default:
  }

  return state;
};

export default reducer;
