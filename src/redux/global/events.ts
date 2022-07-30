import { showGlobalLoadingHandler } from './actions';

export const showGlobalLoading = (show) => {
  return async (dispatch) => {
    dispatch(showGlobalLoadingHandler(show));
  };
};
