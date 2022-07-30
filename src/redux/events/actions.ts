import { EventType } from 'src/types/event';

export const GET_EVENTS_REQUESTED = 'events/GET_EVENTS_REQUESTED';
export const GET_EVENTS_SUCCESS = 'events/GET_EVENTS_SUCCESS';
export const GET_EVENTS_FAILURE = 'events/GET_EVENTS_FAILURE';

// Delete
export const DELETE_EVENT_REQUESTED = 'events/DELETE_EVENT_REQUESTED';
export const DELETE_EVENT_SUCCESS = 'events/DELETE_EVENT_SUCCESS';
export const DELETE_EVENT_FAILURE = 'events/DELETE_EVENT_FAILURE';

// Edit
export const EDIT_EVENT_REQUESTED = 'events/EDIT_EVENT_REQUESTED';
export const EDIT_EVENT_SUCCESS = 'events/EDIT_EVENT_SUCCESS';
export const EDIT_EVENT_FAILURE = 'events/EDIT_EVENT_FAILURE';

// Delete
export const ADD_EVENT_REQUESTED = 'events/ADD_EVENT_REQUESTED';
export const ADD_EVENT_SUCCESS = 'events/ADD_EVENT_SUCCESS';
export const ADD_EVENT_FAILURE = 'events/ADD_EVENT_FAILURE';

export const getEventsRequest = () => ({
  type: GET_EVENTS_REQUESTED,
});

export const getEventsSuccess = (data) => ({
  type: GET_EVENTS_SUCCESS,
  payload: data,
});

export const getEventsFailure = (error) => {
  return {
    type: GET_EVENTS_FAILURE,
    payload: error,
  };
};

// Delete Event
export const deleteEventRequest = (id) => ({
  type: DELETE_EVENT_REQUESTED,
  payload: id,
});

export const deleteEventSuccess = (id) => ({
  type: DELETE_EVENT_SUCCESS,
  payload: id,
});

export const deleteEventFailure = (error) => {
  return {
    type: DELETE_EVENT_FAILURE,
    payload: error,
  };
};

// Add Event
export const addEventRequest = (event: EventType) => ({
  type: ADD_EVENT_REQUESTED,
  payload: event,
});

export const addEventSuccess = (event: EventType) => ({
  type: ADD_EVENT_SUCCESS,
  payload: event,
});

export const addEventFailure = (error) => {
  return {
    type: ADD_EVENT_FAILURE,
    payload: error,
  };
};

// Edit Event
export const editEventRequest = (event: EventType) => ({
  type: EDIT_EVENT_REQUESTED,
  payload: event,
});

export const editEventSuccess = (event: EventType) => ({
  type: EDIT_EVENT_SUCCESS,
  payload: event,
});

export const editEventFailure = (error) => {
  return {
    type: EDIT_EVENT_FAILURE,
    payload: error,
  };
};
