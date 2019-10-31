import { StoryActionType } from "../Reducers/storyReducer";
import { registerComponents } from "../../Game/Config/storyConfig";
import { takeLatest, put } from "redux-saga/effects";

function* asyncSetPage(action) {
  const page = registerComponents.find(page => page.id === action.payload.id);

  if (page == null) return;

  yield put({ type: StoryActionType.UPDATE_PAGE_ID, payload: { id: page.id } });

  if (!action.payload.isLoad) {
    yield put({
      type: StoryActionType.UPDATE_PAGE_DATA,
      payload: { data: page.build() }
    });
  }
}

export default [takeLatest("ASYNC_SET_PAGE", asyncSetPage)];

export const setStory = obj => ({
  type: StoryActionType.LOAD,
  data: obj
});

export const setPageStory = (id, isLoad) => ({
  type: "ASYNC_SET_PAGE",
  payload: { id, isLoad }
});
