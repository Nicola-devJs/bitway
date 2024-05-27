import { combineReducers, configureStore } from "@reduxjs/toolkit";
import objectsReducer from "./slices/objects";
import { objectsApi } from "./services/objects";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: { ...combineReducers(objectsReducer), [objectsApi.reducerPath]: objectsApi.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(objectsApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
