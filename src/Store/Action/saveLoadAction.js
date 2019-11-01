import { takeLatest, select, put } from "redux-saga/effects";

import { SaveLoadActionType } from "../Reducers/saveLoadReducer";
import { saveStates } from "../Config";

export const SaveType = {
  NEW: SaveLoadActionType.ADD_SAVE,
  OVERRIDE: SaveLoadActionType.OVERRIDE_SAVE,
  QUICK: SaveLoadActionType.QUICK_SAVE
};

export const LoadType = {
  SLOT: "SLOT",
  QUICK: "QUICK_LOAD"
};

const getSaveData = store => {
  let data = {};

  saveStates.forEach(state => {
    const name = state.nameState;
    data[name] = store[name];
  });

  return data;
};

function* asyncSave(action) {
  const store = yield select();
  var data = getSaveData(store);

  const config = action.payload;

  switch (config.type) {
    case SaveType.OVERRIDE:
      yield put({
        type: SaveLoadActionType.OVERRIDE_SAVE,
        payload: { index: config.index, data }
      });
      break;
    case SaveType.NEW:
    case SaveType.QUICK:
      yield put({
        type: config.type,
        payload: data
      });
      break;
    default:
      break;
  }
}

function* asyncLoad(action) {
  let saveGame = null;
  const config = action.payload;

  switch (config.type) {
    case LoadType.SLOT:
      const slots = yield select(store => store.saveLoadState.slots);
      saveGame = slots[config.index];
      break;
    case LoadType.QUICK:
      saveGame = yield select(store => store.saveLoadState.quickSave);
      break;
    default:
      return;
  }

  if (saveGame == null) return;

  for (let index = 0; index < saveStates.length; index++) {
    const info = saveStates[index];
    const data = saveGame[info.nameState];
    yield put({ type: info.nameAction, payload: data });
  }
}

export const saveGame = config => ({
  type: "ASYNC_SAVE",
  payload: config
});

export const loadGame = loadType => ({
  type: "ASYNC_LOAD",
  payload: loadType
});

export default [
  takeLatest("ASYNC_SAVE", asyncSave),
  takeLatest("ASYNC_LOAD", asyncLoad)
];
