import { saveStates } from "../Store/Config";

const saveGame = (store, saveAction) => {
  let data = {};

  saveStates.forEach(state => {
    let name = state.nameState;
    data[name] = store[name];
  });

  let jsonData = JSON.stringify(data);
  saveAction(jsonData);
};

const loadSave = (dataString, actions) => {
  let data = JSON.parse(dataString);

  saveStates.forEach(state => {
    actions[state.nameAction](data[state.nameState]);
  });
};

export { saveGame, loadSave };
