import { createStore } from "redux";
import { reducers } from "./Reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

let store = createStore(persistedReducer);
let persistor = persistStore(store);

export { store, persistor };
