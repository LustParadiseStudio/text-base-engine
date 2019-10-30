import { StoryActionType } from "../Reducers/storyReducer";

const setStory = (obj) => ({
  type: StoryActionType.LOAD,
  data: obj
});

const setPageStory = (page, isLoad) => ({
  type: StoryActionType.UPDATE_PAGE,
  data: { page: page, isLoad }
});

const saveStoryState = pageData => ({
  type: StoryActionType.SAVE_PAGE_STATE,
  data: { pageData, isLoad: true }
});

const setLoad = value => ({
  type: StoryActionType.SET_LOAD,
  data: value
});

export { setStory, setPageStory, saveStoryState, setLoad };
