import * as actions from './actions';

const initialState = {
  globalLoading: true,
};

/* eslint-disable */
// @ts-ignore
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SHOW_SPINNER:
      return {
        ...state,
        globalLoading: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
