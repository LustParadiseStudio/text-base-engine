import { combineReducers } from "redux";
import { playerReducer } from "./playerReducer";
import { storyReducer } from "./storyReducer";
import { saveLoadReducer } from "./saveLoadReducer";
import { historyReducer } from "./historyReducer";

export const reducers = combineReducers({
  playerState: playerReducer,
  storyState: storyReducer,
  saveLoadState: saveLoadReducer,
  historyState: historyReducer
});
