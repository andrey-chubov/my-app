import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { bookApi } from "entities/book/api/BookService";

const rootReducer = combineReducers({
  [bookApi.reducerPath]: bookApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(bookApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
