import { EventType } from 'src/types/event';
import {
  getEventsFailure,
  getEventsRequest,
  getEventsSuccess,
  deleteEventRequest,
  deleteEventSuccess,
  deleteEventFailure,
  addEventRequest,
  addEventSuccess,
  addEventFailure,
  editEventRequest,
  editEventSuccess,
  editEventFailure,
} from './actions';
import { showGlobalLoadingHandler } from '../global/actions';

export const getEvents = () => {
  return async (dispatch) => {
    dispatch(showGlobalLoadingHandler(true));
    try {
      dispatch(getEventsRequest());

      const result = await fetch('events.json');
      const json = await result.json();
      setTimeout(() => {
        dispatch(showGlobalLoadingHandler(false));
        return dispatch(getEventsSuccess(json));
      }, 1000);
    } catch (e) {
      dispatch(getEventsFailure(e));
      dispatch(showGlobalLoadingHandler(false));
    }
  };
};

export const addEvent = (event: EventType) => {
  return async (dispatch) => {
    dispatch(showGlobalLoadingHandler(true));
    try {
      dispatch(addEventRequest(event)); // Should be an async function to the backend
      setTimeout(() => {
        dispatch(showGlobalLoadingHandler(false));
        return dispatch(addEventSuccess(event));
      }, 1000);
    } catch (e) {
      dispatch(addEventFailure(e));
      dispatch(showGlobalLoadingHandler(false));
    }
  };
};

export const editEvent = (event: EventType) => {
  return async (dispatch) => {
    dispatch(showGlobalLoadingHandler(true));
    try {
      dispatch(editEventRequest(event)); // Should be an async function to the backend
      setTimeout(() => {
        dispatch(showGlobalLoadingHandler(false));
        return dispatch(editEventSuccess(event));
      }, 1000);
    } catch (e) {
      dispatch(editEventFailure(e));
      dispatch(showGlobalLoadingHandler(false));
    }
  };
};

export const deleteEvent = (id: number) => {
  return async (dispatch) => {
    dispatch(showGlobalLoadingHandler(true));
    try {
      dispatch(deleteEventRequest(id)); // Should be an async function to the backend
      setTimeout(() => {
        dispatch(showGlobalLoadingHandler(false));
        return dispatch(deleteEventSuccess(id));
      }, 1000);
    } catch (e) {
      dispatch(deleteEventFailure(e));
      dispatch(showGlobalLoadingHandler(false));
    }
  };
};
