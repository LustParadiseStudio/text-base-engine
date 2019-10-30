import { SaveLoadActionType } from "../Reducers/saveLoadReducer";

const setQuickSave = save => ({
  type: SaveLoadActionType.QUICK_SAVE,
  data: save
});

export { setQuickSave };
