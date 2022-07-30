import * as actions from './actions';

const initialState = {
  events: [],
  success: false,
  error: undefined,
};

/* eslint-disable */
// @ts-ignore
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_EVENTS_REQUESTED:
      return {
        ...state,
        error: undefined,
      };
    case actions.GET_EVENTS_SUCCESS:
      return {
        ...state,
        events: action.payload,
      };
    case actions.GET_EVENTS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    // Add
    case actions.ADD_EVENT_REQUESTED:
      return {
        ...state,
        error: undefined,
      };
    case actions.ADD_EVENT_SUCCESS:
      const newEvents = [...state.events];
      newEvents.push(action.payload);
      return {
        ...state,
        events: newEvents,
        success: true,
      };
    case actions.ADD_EVENT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    // Edit
    case actions.EDIT_EVENT_REQUESTED:
      return {
        ...state,
        error: undefined,
      };
    case actions.EDIT_EVENT_SUCCESS:
      const editedEvents = [...state.events];
      const index = editedEvents.findIndex((event) => event.id === action.payload.id);
      editedEvents[index] = action.payload;
      return {
        ...state,
        events: editedEvents,
        success: true,
      };
    case actions.EDIT_EVENT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    // Delete
    case actions.DELETE_EVENT_REQUESTED:
      return {
        ...state,
        error: undefined,
      };
    case actions.DELETE_EVENT_SUCCESS:
      return {
        ...state,
        events: state.events.filter((event) => event.id !== action.payload),
      };
    case actions.DELETE_EVENT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return { ...state, success: false };
  }
};

export default reducer;
