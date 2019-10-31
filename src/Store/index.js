import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

//Persist
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

//Config
import { reducers } from "./Reducers";
import rootSaga from "./sagas";

const persistConfig = {
  key: "root",
  storage
};

const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, reducers);

let store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
let persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
export { store, persistor };
