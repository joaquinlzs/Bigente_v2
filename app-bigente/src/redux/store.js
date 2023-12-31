import { configureStore } from "@reduxjs/toolkit";
import topicReducer from './topicSlice';


const store = configureStore({
  reducer: {
    topic: topicReducer,
  },
});

export default store;
