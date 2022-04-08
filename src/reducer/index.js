import store from "../store";

const initialState = {
  count: 0,
  items: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        count: state.count + 1,
        items: [...state.items, ...action.payload],
      };

    case "DELETE_ITEM":
      const updatedItems = state.items.filter((data)=> data.id !== action.payload.id)
      return {
        ...state,
        count: state.count + 1,
        items: [...updatedItems],
      };

    default:
      return state;
  }
}
