const initialState = {
  pageID: null,
  pageData: null
};

export const StoryActionType = {
  SET: "SET_STORY",
  UPDATE_PAGE_ID: "UPDATE_PAGE_ID",
  UPDATE_PAGE_DATA: "SAVE_PAGE_STATE"
};

export const storyReducer = (state = initialState, action) => {
  switch (action.type) {
    case StoryActionType.SET:
      return action.payload;
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
