const initialState = {
  name: "Francisco Lucas"
};

const PlayerActionType = {
  SET: "SET_PLAYER_STATUS"
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case PlayerActionType.SET:
      return action.payload;
    default:
      return state;
  }
};

export { PlayerActionType, playerReducer };
