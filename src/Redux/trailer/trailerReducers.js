import { SET_TRAILER } from "./trailerActions";

const initialState = {
  trailer: null,
};

const trailerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRAILER:
      return {
        trailer: action.payload,
      };
    default:
      return state;
  }
};
