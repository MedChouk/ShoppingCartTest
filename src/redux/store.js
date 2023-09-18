// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/reducer.js'; // Import your reducer here


const store = configureStore({
    reducer: {
        counter: counterReducer, // Add your reducer here
      },
});

export default store;
