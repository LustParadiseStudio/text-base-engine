const initialState = {
  index: 0,
  maxLength: 5,
  saves: []
};

const HistoryActionType = {
  SET: "SET_HISTORY",
  SAVE_HISTORY: "SAVE_HISTORY",
  SET_INDEX_HISTORY: "SET_INDEX_HISTORY"
};

const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case HistoryActionType.SET:
      return action.payload;
    case HistoryActionType.SAVE_HISTORY:
      var newsaves = [...state.saves].slice(0, state.index);
      newsaves.push(action.payload);

      var newIndex = Math.min(state.index + 1, state.maxLength);
      var start = Math.max(newsaves.length - state.maxLength, 0);
      newsaves = newsaves.slice(start, newsaves.length);

      return {
        ...state,
        index: newIndex,
        saves: newsaves
      };
    case HistoryActionType.SET_INDEX_HISTORY:
      return {
        ...state,
        index: action.payload
      };
    default:
      return state;
  }
};

export { HistoryActionType, historyReducer };
