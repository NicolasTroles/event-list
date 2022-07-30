export const SHOW_SPINNER = 'events/SHOW_SPINNER';

export const showGlobalLoadingHandler = (show) => ({
  type: SHOW_SPINNER,
  payload: show,
});
