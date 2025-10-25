import { configureStore } from "@reduxjs/toolkit";
import { persistReducer , persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import tasksReducer from "./tasksSliceAsync"
import storage from "redux-persist/lib/storage"
const persistConfig = {
key:"root",
storage,
whitelist: ["tasks"]
}
const persistedReducer =  persistReducer(persistConfig , tasksReducer)
export const store = configureStore({
    reducer:{
        tasks:persistedReducer
    },
     middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store)