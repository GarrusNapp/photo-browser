import { SHOW } from "../actions/types";

const initialState = "";

export const showReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW:
      return action.payload;
    default:
      return state;
  }
};
