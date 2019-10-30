import { playerActionType } from "../Reducers/playerReducer";

const setPlayerStatus = obj => ({
  type: playerActionType.LOAD,
  data: obj
});

export { setPlayerStatus }