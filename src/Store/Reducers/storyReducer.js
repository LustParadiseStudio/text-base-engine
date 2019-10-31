const initialState = {
  pageID: null,
  pageData: null
};

const StoryActionType = {
  LOAD: "LOAD",
  UPDATE_PAGE_ID: "UPDATE_PAGE_ID",
  UPDATE_PAGE_DATA: "SAVE_PAGE_STATE"
};

const storyReducer = (state = initialState, action) => {
  switch (action.type) {
    case StoryActionType.LOAD:
      return action.data;
    case StoryActionType.UPDATE_PAGE_ID:
      return {
        ...state,
        pageID: action.payload.id
      };
    case StoryActionType.UPDATE_PAGE_DATA:
      return {
        ...state,
        pageData: action.payload.data
      };
    default:
      return state;
  }
};

export { StoryActionType, storyReducer };
