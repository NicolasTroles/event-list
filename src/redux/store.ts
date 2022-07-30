import { configureStore } from '@reduxjs/toolkit';
import globalReducer from './global/reducer';
import eventsReducer from './events/reducer';

export default configureStore({
  reducer: {
    global: globalReducer,
    events: eventsReducer,
  },
});
