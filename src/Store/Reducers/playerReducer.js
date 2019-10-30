const initialState = {
  name: "Francisco Lucas"
};

const playerActionType = {
  LOAD: "LOAD"
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case playerActionType.LOAD:
      return action.data;
    default:
      return state;
  }
};

export { playerActionType, playerReducer };
