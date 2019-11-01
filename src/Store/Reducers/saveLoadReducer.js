const initialState = {
  quickSave: null,
  slots: []
};

const SaveLoadActionType = {
  QUICK_SAVE: "QUICK",
  ADD_SAVE: "ADD",
  OVERRIDE_SAVE: "OVERRIDE"
};

const saveLoadReducer = (state = initialState, action) => {
  switch (action.type) {
    case SaveLoadActionType.QUICK_SAVE:
      return {
        ...state,
        quickSave: action.payload
      };
    case SaveLoadActionType.ADD_SAVE:
      var addSave = [...state.slots];
      addSave.push(action.payload);

      return {
        ...state,
        slots: addSave
      };
    case SaveLoadActionType.OVERRIDE_SAVE:
      var overrideSave = [...state.slots];
      overrideSave[action.payload.index] = action.payload.data;

      return {
        ...state,
        slots: overrideSave
      };
    default:
      return state;
  }
};

export { SaveLoadActionType, saveLoadReducer };
