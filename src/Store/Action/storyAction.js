import { takeLatest, put } from "redux-saga/effects";

import { registerComponents } from "../../Game/Config/storyConfig";
import { StoryActionType } from "../Reducers/storyReducer";
import { SaveType } from "./saveLoadAction";

function* asyncSetPage(action) {
  const page = registerComponents.find(page => page.id === action.payload.id);

  if (page == null) return;

  yield put({ type: StoryActionType.UPDATE_PAGE_ID, payload: { id: page.id } });
  yield put({
    type: StoryActionType.UPDATE_PAGE_DATA,
    payload: { data: page.build() }
  });

  if (action.payload.isSaveHistory) {
    yield put({ type: "ASYNC_SAVE", payload: { type: SaveType.HISTORY } });
  }
}

export default [takeLatest("ASYNC_SET_PAGE", asyncSetPage)];

export const setPageStory = (id, isSaveHistory = true) => ({
  type: "ASYNC_SET_PAGE",
  payload: { id, isSaveHistory }
});
