import { combineReducers } from "redux";
import { playerReducer } from "./playerReducer";
import { storyReducer } from "./storyReducer";
import { saveLoadReducer } from "./saveLoadReducer";

export const reducers = combineReducers({
  playerState: playerReducer,
  storyState: storyReducer,
  saveLoadState: saveLoadReducer
});
