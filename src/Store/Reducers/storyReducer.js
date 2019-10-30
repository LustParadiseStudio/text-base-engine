const initialState = {
  currentPage: null,
  currentPageState: null,
  isLoad: true,
  forceUpdate: false
};

const StoryActionType = {
  LOAD: "LOAD",
  UPDATE_PAGE: "UPDATE_PAGE",
  SAVE_PAGE_STATE: "SAVE_PAGE_STATE",
  SET_LOAD: "SET_LOAD"
};

const storyReducer = (state = initialState, action) => {
  switch (action.type) {
    case StoryActionType.LOAD:
      return action.data;
    case StoryActionType.UPDATE_PAGE:
      return {
        ...state,
        currentPage: action.data.page,
        isLoad: action.data.isLoad,
        forceUpdate: !state.forceUpdate
      };
    case StoryActionType.SAVE_PAGE_STATE:
      return {
        ...state,
        currentPageState: action.data.pageData,
        isLoad: action.data.isLoad
      };
    case StoryActionType.SET_LOAD:
      return {
        ...state,
        isLoad: action.data
      };
    default:
      return state;
  }
};

export { StoryActionType, storyReducer };
