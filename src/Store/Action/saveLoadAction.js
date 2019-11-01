import { takeLatest, select, put } from "redux-saga/effects";

import { SaveLoadActionType } from "../Reducers/saveLoadReducer";
import { HistoryActionType } from "../Reducers/historyReducer";
import { saveStates } from "../Config";

export const SaveType = {
  NEW: SaveLoadActionType.ADD_SAVE,
  OVERRIDE: SaveLoadActionType.OVERRIDE_SAVE,
  QUICK: SaveLoadActionType.QUICK_SAVE,
  HISTORY: HistoryActionType.SAVE_HISTORY
};

export const LoadType = {
  SLOT: "SLOT",
  QUICK: "QUICK_LOAD",
  PREVIOUS: "PREVIOUS_HISTORY",
  NEXT: "NEXT_HISTORY"
};

const getSaveData = (store, withHistory = false) => {
  let data = {};

  saveStates.forEach(state => {
    const name = state.nameState;
    data[name] = store[name];
  });

  if (withHistory) {
    data.historyState = store.historyState;
  }

  return data;
};

function* asyncSave(action) {
  const store = yield select();
  const config = action.payload;

  var withHistory = SaveType.HISTORY !== config.type;
  var data = getSaveData(store, withHistory);

  switch (config.type) {
    case SaveType.OVERRIDE:
      yield put({
        type: SaveLoadActionType.OVERRIDE_SAVE,
        payload: { index: config.index, data }
      });
      break;
    case SaveType.NEW:
    case SaveType.QUICK:
    case SaveType.HISTORY:
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
    case LoadType.NEXT:
    case LoadType.PREVIOUS:
      var history = yield select(store => store.historyState);
      var currentIndex = history.index;

      if (config.type === LoadType.NEXT) {
        currentIndex = Math.min(history.index + 1, history.saves.length);
      } else {
        currentIndex = Math.max(currentIndex - 1, 1);
      }

      yield put({
        type: HistoryActionType.SET_INDEX_HISTORY,
        payload: currentIndex
      });

      saveGame = history.saves[currentIndex - 1];
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

  if(saveGame.historyState != null)
  {
    yield put({ type: HistoryActionType.SET, payload: saveGame.historyState });
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
