import {configureStore} from '@reduxjs/toolkit';
import movieReducer from './redux/reducers/movieReducer';

const store = configureStore({
  reducer: {
    movie: movieReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
