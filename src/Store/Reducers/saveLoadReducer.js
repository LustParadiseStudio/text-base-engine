const initialState = {
  quickSave: null
};

const SaveLoadActionType = {
  QUICK_SAVE: "QUICK_SAVE"
};

const saveLoadReducer = (state = initialState, action) => {
  switch (action.type) {
    case SaveLoadActionType.QUICK_SAVE:
      return {
        ...state,
        quickSave: action.data
      };
    default:
      return state;
  }
};

export { SaveLoadActionType, saveLoadReducer };
